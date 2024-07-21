import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

function Account() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-700">
        Update your account
      </h1>

      <div>
        <h3 className="mb-2 text-xl text-gray-700">Update user data</h3>
        <UpdateUserDataForm />
      </div>

      <div>
        <h3 className="mb-2 text-xl text-gray-700">Update password</h3>
        <UpdatePasswordForm />
      </div>
    </>
  );
}

export default Account;
