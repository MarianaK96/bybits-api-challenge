import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  InputsStyle,
  InputsContainer,
  LoginBtnStyle,
  PassContainer,
  EyeIcon,
} from "./LoginInputs.styles";
import ForgotPassword from "../../atoms/ForgotPassword/ForgotPassword";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { login } from "../../../services/AuthService";

const LoginInputs = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <InputsContainer>
        <InputsStyle
          type="email"
          required
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PassContainer>
          <InputsStyle
            type={passwordVisible ? "text" : "password"}
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <EyeIcon onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </EyeIcon>
        </PassContainer>

        <ForgotPassword />
        <LoginBtnStyle
          to="/policy-page"
          onClick={() => login(username, password)}
        >
          <p>login</p>
        </LoginBtnStyle>
      </InputsContainer>
    </>
  );
};

export default LoginInputs;
