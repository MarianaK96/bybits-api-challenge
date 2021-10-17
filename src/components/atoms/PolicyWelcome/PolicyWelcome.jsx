import React from "react";
import { PolicyTitleStyles } from "./PolicyWelcome.styles";

const PolicyTitle = ({ name }) => {
  return (
    <>
      <PolicyTitleStyles>Hi {name}</PolicyTitleStyles>
    </>
  );
};

export default PolicyTitle;
