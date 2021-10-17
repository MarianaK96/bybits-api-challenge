import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const PolicyType = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #807373;
  font-weight: 500;
  display: none;
  text-align: center;
  cursor: pointer;

  @media ${device.lg} {
    display: block;
  }
`;

export const PolicyInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const EssPolicyInfo = styled.div`
  display: ${({ visibility }) => (visibility ? "none" : "block")};
  cursor: pointer;
  background-color: #fdfdfd;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 40px 5px rgb(195 195 200 / 70%);

  @media ${device.lg} {
    display: block;
    background-color: #fdfdfd;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0px 2px 40px 5px rgb(195 195 200 / 70%);
    opacity: ${({ opacity }) => (opacity ? "0.5" : "1")};
  }
`;

export const AddPolicyInfo = styled.div`
  display: ${({ visibility }) => (visibility ? "block" : "none")};
  cursor: pointer;
  background-color: #fdfdfd;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 40px 5px rgb(195 195 200 / 70%);

@media ${device.lg} {
  opacity: ${({ opacity }) => (opacity ? "1" : "0.5")};
  display: block;
  background-color: #FDFDFD;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 40px 5px rgb(195 195 200 / 70%);
}
}
`;
