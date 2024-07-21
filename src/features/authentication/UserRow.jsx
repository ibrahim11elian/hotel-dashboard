import Table from "../../ui/Table";
import { FaUserCircle } from "react-icons/fa";

function UserRow({ user }) {
  const {
    user_metadata: { fullName, avatar },
    email,
  } = user;
  return (
    <Table.Row>
      {avatar ? (
        <img
          src={avatar}
          alt={fullName}
          className="block aspect-[3/2] w-16 scale-150 transform object-cover object-center"
        />
      ) : (
        <FaUserCircle className="ml-2 text-5xl text-gray-300" />
      )}
      <div className="font-semibold">{fullName ? fullName : <>&mdash;</>}</div>
      <div className="text-gray-500">{email}</div>
    </Table.Row>
  );
}

export default UserRow;
