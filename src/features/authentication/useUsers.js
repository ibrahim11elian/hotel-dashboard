import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "../../services/apiAuth";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useUsers() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data, isLoading, error } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page),
  });

  const users = data?.users || [];
  const count = data?.total || 0;

  // pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", page + 1],
      queryFn: () => getUsers(page + 1),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", page - 1],
      queryFn: () => getUsers(page - 1),
    });
  }

  return { users, count, isLoading, error };
}

export default useUsers;
