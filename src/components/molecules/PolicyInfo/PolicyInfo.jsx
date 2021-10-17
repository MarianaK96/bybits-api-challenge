import React from "react";

import { PolicyInfoStyles, PolicyTitleStyles } from "./PolicyInfo.styles";

const PolicyInfo = ({ title, info }) => {
  return (
    <>
      <PolicyTitleStyles>{title}</PolicyTitleStyles>
      <PolicyInfoStyles>{info}</PolicyInfoStyles>
    </>
  );
};

export default PolicyInfo;
