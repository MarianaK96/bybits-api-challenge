import React from "react";
import {
  PolicyInfoContainer,
  EssPolicyInfo,
  AddPolicyInfo,
  PolicyType,
} from "./PolicyInfoTypes.styles";
import PolicyInfo from "../../molecules/PolicyInfo/PolicyInfo";

const PolicyInfoTypes = ({
  opacity,
  visibility,
  setOpacity,
  policyInfo,
  addPolicyInfo,
}) => {
  return (
    <>
      <PolicyInfoContainer>
        <EssPolicyInfo
          opacity={opacity}
          visibility={visibility}
          onClick={() => setOpacity(!opacity)}
        >
          <PolicyType>ESSENTIAL INFORMATION</PolicyType>

          {policyInfo.map((item) => {
            return (
              <PolicyInfo
                key={item.title}
                title={item.title}
                info={item.info}
              />
            );
          })}
        </EssPolicyInfo>

        <AddPolicyInfo
          opacity={opacity}
          visibility={visibility}
          onClick={() => setOpacity(!opacity)}
        >
          <PolicyType>ADDITIONAL INFORMATION</PolicyType>
          {addPolicyInfo.map((item) => {
            return (
              <PolicyInfo
                key={item.title}
                title={item.title}
                info={item.info}
              />
            );
          })}
        </AddPolicyInfo>
      </PolicyInfoContainer>
    </>
  );
};

export default PolicyInfoTypes;
