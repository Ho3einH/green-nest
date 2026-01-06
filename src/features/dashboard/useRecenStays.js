import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns-jalali";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecenStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last") ? 7 : searchParams.get("last");
  const queryDays = subDays(new Date(), numDays).toISOString();

  const { data: stays, isLoading } = useQuery({
    queryFn: () => getStaysAfterDate(queryDays),
    queryKey: ["stays", `last${numDays}`],
  });

  const confirmedStay = stays?.filter(
    (stay) => stay.status === "وارد-شده" || stay.status === "خارج-شده"
  );
  console.log(confirmedStay);
  return { stays, isLoading, confirmedStay, numDays };
}
