import React, { useState, useEffect } from "react";

import { PolicyPageStyles } from "./PolicyPage.styles";

import PolicyInfo from "../../molecules/PolicyInfo/PolicyInfo";
import PolicyTitle from "../../atoms/PolicyWelcome/PolicyWelcome";
import PolicyTitles from "../../atoms/PolicyTypeTitles/PolicyTypeTitles";
import LogoutBtn from "../../atoms/LogoutBtn/LogoutBtn";
import PolicyInfoTypes from "../../organism/PolicyInfoTypes/PolicyInfoTypes";

import { getPolicy } from "../../../services/PolicyService";

const PolicyPage = () => {
  const [firstName, setFirstName] = useState([]);
  const [opacity, setOpacity] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [policyInfo, setPolicyInfo] = useState([]);
  const [addPolicyInfo, setAddPolicyInfo] = useState([]);

  const fetchData = async () => {
    const policyData = await getPolicy();
    setFirstName(policyData[2][0].info);
    setPolicyInfo(policyData[0]);
    setAddPolicyInfo(policyData[1]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PolicyPageStyles>
        <PolicyTitle name={firstName} />
        <PolicyTitles visibility={visibility} setVisibility={setVisibility} />
        <PolicyInfoTypes
          opacity={opacity}
          setVisibility={setVisibility}
          visibility={visibility}
          setOpacity={setOpacity}
          policyInfo={policyInfo}
          addPolicyInfo={addPolicyInfo}
        />
        <LogoutBtn />
      </PolicyPageStyles>
    </>
  );
};
<PolicyInfo />;

export default PolicyPage;
