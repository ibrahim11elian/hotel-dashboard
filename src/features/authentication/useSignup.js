import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

function useSignup() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const { mutate: createUser, isPending: isCreating } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signup(fullName, email, password),
    onSuccess: () => {
      toast.success(
        "New user are now created, please verify the account from user's email address",
      );
      queryClient.invalidateQueries({
        queryKey: ["users", page],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createUser, isCreating };
}

export default useSignup;
