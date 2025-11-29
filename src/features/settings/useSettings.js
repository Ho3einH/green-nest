import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const { isLoading, data: setting } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, setting };
}
