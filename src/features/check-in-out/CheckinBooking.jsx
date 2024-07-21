import BookingDataBox from "../../features/bookings/BookingDataBox";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import useGetBooking from "../bookings/useGetBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import useCheckin from "./useCheckin";
import useSettings from "../settings/useSettings";

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { checkIn, isCheckingIn } = useCheckin();
  const { booking, isLoading } = useGetBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  const moveBack = useMoveBack();
  const {
    id: bookingId,
    numNights,
    numGuests,
    totalPrice,
    hasBreakfast,
    isPaid,
    guests: { fullName: guestName } = {},
  } = booking || {};

  const breakfastOptionalPrice =
    settings?.breakfastPrice * numGuests * numNights;

  useEffect(() => {
    if (isPaid) setConfirmPaid(true);
    if (!hasBreakfast) setAddBreakfast(false);
  }, [isPaid, hasBreakfast]);

  if (isLoading || isLoadingSettings) return <Spinner />;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: breakfastOptionalPrice,
          totalPrice: totalPrice + breakfastOptionalPrice,
        },
      });
    } else {
      checkIn({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-700">
          Check in booking #{bookingId}
        </h1>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </div>

      <BookingDataBox booking={booking} />

      {!hasBreakfast ? (
        <Checkbox
          checked={addBreakfast}
          onChange={() => {
            setAddBreakfast(() => !addBreakfast);
            setConfirmPaid(() => !confirmPaid);
          }}
          id={"breakfast"}
        >
          Want to add breakfast for {formatCurrency(breakfastOptionalPrice)}?
        </Checkbox>
      ) : null}
      <Checkbox
        checked={confirmPaid}
        onChange={() => setConfirmPaid(() => !confirmPaid)}
        disabled={confirmPaid || isCheckingIn}
        id={"confirm"}
      >
        I Confirm that {guestName} has paid the total amount of{" "}
        {!addBreakfast
          ? formatCurrency(totalPrice)
          : ` ${formatCurrency(totalPrice + breakfastOptionalPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(breakfastOptionalPrice)})`}
      </Checkbox>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
