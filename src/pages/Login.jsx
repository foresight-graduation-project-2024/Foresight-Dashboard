import { useState } from "react";
import styled from "styled-components";

import Form from "../components/custom/Form";
import Logo from "../components/Logo";
import notVisiblePassword from "../assets/visibility_off.png";
import visiblePassword from "../assets/visibility_on.png";
import { verifyLogIn } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import DotPulse from "../components/custom/DotPulse";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 64rem;
  align-content: center;
  justify-content: center;
  gap: 2.4rem;
  background-color: var(--color-grey-50);
`;

const LoginHeader = styled.div`
  margin-bottom: 0.8rem;
  text-align: center;
`;

const FormRowVertical = styled.div`
  margin-bottom: 1.8rem;
`;

const PasswordField = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  color: var(--color-black);
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  color: var(--color-black);
  font-size: 16px;
  border-radius: 8px;
  border-color: var(--color-grey-300);
  padding: 0.8rem 1.6rem;
`;

const Icon = styled.div`
  position: absolute;
  top: 22%;
  right: 24px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Logout = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoutBtn = styled.button`
  width: 100%;
  font-size: 16px;
  color: var(--color-grey-0);
  background-color: var(--color-primary);
  border-radius: 8px;
  margin-top: 12px;
  padding: 0.8rem 0;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary-variant);
  }
`;

const Error = styled.p`
  font-size: 16px;
  color: var(--color-red-700);
  margin-top: 12px;
  margin-bottom: 12px;
`;

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const isLoading = useSelector((state) => state.ui.isLoading);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsVisiblePassword(!isVisiblePassword);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) {
        return;
      }

      const data = await verifyLogIn({ email, password }, true);
      if (data.role === "ADMIN") navigate("/dashboard");
    } catch (err) {
      if (err.response.data.code === 5) setLoginFailed(true);
    }
  };

  return (
    <LoginLayout>
      <Logo />
      <LoginHeader>
        {/* <h1>
          Welcome to <strong>foresight</strong>
        </h1> */}
        <p>Please enter your details to login</p>
      </LoginHeader>

      <Form onSubmit={handleSubmit}>
        <FormRowVertical>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // disabled={isLoading}
          />
        </FormRowVertical>

        <FormRowVertical>
          <Label htmlFor="password">Password</Label>
          <PasswordField>
            <Input
              type={isVisiblePassword ? "text" : "password"}
              id="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // disabled={isLoading}
            />
            <Icon>
              <Button onClick={togglePasswordVisibility}>
                <img
                  alt="Visible icon"
                  src={isVisiblePassword ? visiblePassword : notVisiblePassword}
                  style={{ width: 24, height: 24 }}
                />
              </Button>
            </Icon>
          </PasswordField>
        </FormRowVertical>

        {loginFailed && !isLoading && <Error>Email or Password are incorrect!</Error>}

        {isLoading && <p>Loading ...</p>}
        <Logout>
          <LogoutBtn>LOG IN</LogoutBtn>
          {/* <LogoutBtn>{isLoading ? <DotPulse /> : "LOG IN"}</LogoutBtn> */}
        </Logout>
      </Form>
    </LoginLayout>
  );
}

export default Login;
