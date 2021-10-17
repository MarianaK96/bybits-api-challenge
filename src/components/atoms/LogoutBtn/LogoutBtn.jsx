import React from "react";
import { LogoutBtnStyles } from "./LogoutBtn.styles";

const LogoutBtn = () => {
  return (
    <>
      <LogoutBtnStyles to="/">
        <p>logout</p>
      </LogoutBtnStyles>
    </>
  );
};

export default LogoutBtn;
