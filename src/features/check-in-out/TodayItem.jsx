import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Flag from "../../ui/Flag";
import Tag from "../../ui/Tag";
import CheckoutButton from "./CheckoutButton";

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  return (
    <li className="grid grid-cols-[5.5rem_2rem_1fr_4rem_5.5rem] items-center gap-3 border-b border-gray-200 py-2 text-sm first:border-t">
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />

      <Guest>{guests.fullName}</Guest>

      <div className="text-gray-500">
        {numNights} {numNights === 1 ? "night" : "nights"}
      </div>

      {status === "unconfirmed" && (
        <Link to={`/checkin/${id}`}>
          <Button variation="primary" size={"small"}>
            Check in
          </Button>
        </Link>
      )}
      {status === "checked-in" && (
        <CheckoutButton bookingId={id}>Check out</CheckoutButton>
      )}
    </li>
  );
}

function Guest({ children }) {
  return <div className="font-medium text-gray-700">{children}</div>;
}

export { TodayItem, Guest };
