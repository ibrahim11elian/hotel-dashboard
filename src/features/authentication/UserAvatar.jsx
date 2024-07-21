import { FaUserCircle } from "react-icons/fa";
import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
      {avatar ? (
        <img
          src={avatar}
          alt={`${fullName}'s avatar`}
          className="block h-10 w-10 rounded-full border-2 border-blue-600 object-cover object-center shadow-lg outline outline-2 outline-gray-100"
        />
      ) : (
        <FaUserCircle className="text-3xl text-gray-300" />
      )}
      <span className="font-semibold">{fullName}</span>
    </div>
  );
}

export default UserAvatar;
