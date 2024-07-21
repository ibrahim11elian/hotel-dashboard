import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function validate(email, password) {
  let errors = {};

  if (!email) errors.email = "Email is required";

  if (!password) errors.password = "Password is required";

  return errors;
}

function LoginForm() {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("12345678");
  const [errors, setErrors] = useState({});
  const { login, isLoggingIn } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();

    setErrors(validate(email, password));

    if (email && password) {
      login(
        { email, password },
        {
          onSettled: () => {
            setEmail("");
            setPassword("");
          },
        },
      );
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address" error={errors?.email}>
        <Input
          type="email"
          id="email"
          disabled={isLoggingIn}
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" error={errors?.password}>
        <Input
          type="password"
          id="password"
          disabled={isLoggingIn}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoggingIn} onClick={handleSubmit}>
          {!isLoggingIn ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
