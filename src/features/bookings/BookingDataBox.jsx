import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import Flag from "../../ui/Flag";
import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

const BookingDataBox = ({ booking }) => {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: {
      fullName: guestName,
      email,
      country,
      countryFlag,
      nationalID,
    } = {},
    cabins: { name: cabinName } = {},
  } = booking;

  return (
    <section className="overflow-hidden rounded-md border border-gray-100 bg-white">
      <header className="flex items-center justify-between bg-blue-500 px-8 py-5 text-[#e5e7eb]">
        <div className="flex items-center gap-6 text-xl font-semibold">
          <HiOutlineHomeModern className="h-8 w-8" />
          <p>
            {numNights} nights in Cabin{" "}
            <span className="font-sono font-bold">{cabinName}</span>
          </p>
        </div>
        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>

      <section className="p-8 pb-3">
        <div className="mb-4 flex items-center gap-3 text-gray-500">
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p className="font-medium text-gray-700">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>

        <div className="text-gray-800">
          {observations && (
            <DataItem
              icon={<HiOutlineChatBubbleBottomCenterText color="#4f46e5" />}
              label="Observations"
            >
              <span className="text-gray-600">{observations}</span>
            </DataItem>
          )}

          <DataItem
            icon={<HiOutlineCheckCircle color="#4f46e5" />}
            label="Breakfast included?"
          >
            <span className="text-gray-600">{hasBreakfast ? "Yes" : "No"}</span>
          </DataItem>
        </div>

        <div
          className={`mt-6 flex items-center justify-between rounded-sm p-4 ${
            isPaid
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
            {formatCurrency(totalPrice)}
            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice,
              )} breakfast)`}
          </DataItem>
          <p className="text-base font-semibold uppercase">
            {isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
      </section>

      <footer className="p-4 text-right text-sm text-gray-500">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
};

export default BookingDataBox;
