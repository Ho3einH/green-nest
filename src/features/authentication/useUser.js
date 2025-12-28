import { useQuery } from "@tanstack/react-query";
import { getCurrentuser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentuser,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
