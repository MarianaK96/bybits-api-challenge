import React from "react";
import { LogoutBtnStyles } from "./LogoutBtn.styles";
import { Link } from "react-router-dom";

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
