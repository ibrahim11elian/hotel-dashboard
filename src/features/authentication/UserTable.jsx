import toast from "react-hot-toast";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import UserRow from "./UserRow";
import useUsers from "./useUsers";

function UserTable() {
  const { users, count, isLoading, error } = useUsers();

  if (isLoading) return <Spinner />;

  if (!users || !users.length) return <Empty resource={"users"} />;

  if (error) toast.error(error.message);

  return (
    <Table columns={"10rem 20rem 20rem"}>
      <Table.Header>
        <div></div>
        <div>Name</div>
        <div>Email</div>
      </Table.Header>
      <Table.Body
        data={users}
        render={(user) => <UserRow key={user.id} user={user} />}
      ></Table.Body>
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default UserTable;
