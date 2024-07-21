import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        active: true,
      });
      toast.success(`Booking deleted successfully`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isDeleting };
}

export default useDeleteBooking;
