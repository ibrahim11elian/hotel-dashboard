import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
function MainNav() {
  return (
    <ul className="mt-3 flex flex-col gap-2">
      <li>
        <NavLink className="nav-link" to={"dashboard"}>
          <HiOutlineHome />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to={"bookings"}>
          <HiOutlineCalendarDays />
          <span>Bookings</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to={"cabins"}>
          <HiOutlineHomeModern />
          <span>Cabins</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to={"users"}>
          <HiOutlineUsers />
          <span>Users</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to={"settings"}>
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
