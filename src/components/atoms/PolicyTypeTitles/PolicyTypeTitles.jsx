import React from "react";
import {
  PolicyTitlesContainer,
  EssPolicyTypeSmall,
  AddPolicyTypeSmall,
} from "./PolicyTypeTitles.styles";

const PolicyTitles = ({ visibility, setVisibility }) => {
  return (
    <>
      <PolicyTitlesContainer>
        <EssPolicyTypeSmall
          visibility={visibility}
          setVisibility={setVisibility}
          onClick={() => setVisibility(false)}
        >
          ESSENTIAL INFORMATION
        </EssPolicyTypeSmall>
        <AddPolicyTypeSmall
          visibility={visibility}
          setVisibility={setVisibility}
          onClick={() => {
            setVisibility(true);
          }}
        >
          ADDITIONAL INFORMATION
        </AddPolicyTypeSmall>
      </PolicyTitlesContainer>
    </>
  );
};

export default PolicyTitles;
