import React from "react";
import LoginInputs from "../../molecules/LoginInputs/LoginInputs";

import { LoginPageStyles, InputTitle } from "./LoginPageStyles";
import Title from "../../atoms/WelcomeTitle/WelcomeTitle";

const LoginPage = () => {
  return (
    <>
      <LoginPageStyles>
        <InputTitle>
          <Title />
          <LoginInputs />
        </InputTitle>
      </LoginPageStyles>
    </>
  );
};

export default LoginPage;
