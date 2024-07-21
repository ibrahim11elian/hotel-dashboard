import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";

function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isCheckingIn, mutate: checkIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked in successfully!`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: (err) => toast.error(err.message),
  });

  return { checkIn, isCheckingIn };
}

export default useCheckin;
