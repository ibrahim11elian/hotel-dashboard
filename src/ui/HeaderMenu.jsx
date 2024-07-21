import { Link } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import UserAvatar from "../features/authentication/UserAvatar";
import DarkModeToggle from "./DarkModeToggle";

function HeaderMenu() {
  return (
    <ul className="flex items-center gap-3">
      <li>
        <Link to="/account">
          <UserAvatar />
        </Link>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
