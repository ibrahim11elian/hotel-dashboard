import { useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";
import useUser from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (isAuthenticated && !isLoading) navigate("/");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <Spinner />
      </div>
    );

  return (
    <div className="grid min-h-screen grid-cols-[30rem] content-center justify-center gap-5 bg-gray-50">
      <div className="flex w-full flex-col items-center justify-center">
        <Logo width={"12rem"} height={"10rem"} />

        <h2 className="w-full text-center text-3xl font-semibold text-gray-700">
          Login to your account
        </h2>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
