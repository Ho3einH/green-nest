import styled from "styled-components";
import Stats from "./Stats";
import Spinner from "../../ui/Spinner";
import { useRecentBookings } from "./useRecentbookings";
import { useRecenStays } from "./useRecenStays";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStay, numDays, isLoading: isLoading2 } = useRecenStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <>
      <StyledDashboardLayout>
        <Stats
          bookings={bookings}
          confirmedStay={confirmedStay}
          numCabins={cabins.length}
          numDays={numDays}
        />
        <div>فعالیت امروز</div>
        <DurationChart confirmedStay={confirmedStay} />
        <SalesChart bookings={bookings} numDays={numDays} />
      </StyledDashboardLayout>
    </>
  );
}

export default DashboardLayout;
