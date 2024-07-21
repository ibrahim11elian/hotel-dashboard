import SignupForm from "../features/authentication/SignupForm";
import UserTable from "../features/authentication/UserTable";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function Users() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-700">Users</h1>

      <UserTable />

      <div>
        <Modal>
          <Modal.Open opens={"user-form"}>
            <Button>Create New User</Button>
          </Modal.Open>
          <Modal.Window name="user-form">
            <SignupForm />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

export default Users;
