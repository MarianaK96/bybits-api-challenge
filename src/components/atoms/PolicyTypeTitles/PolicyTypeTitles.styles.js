import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const PolicyTitlesContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;
  padding-top: 1rem;

  @media ${device.lg} {
    display: none;
  }
`;

export const EssPolicyTypeSmall = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  color: #807373;
  font-weight: 500;
  text-align: center;
  margin-right: 1rem;
  margin-left: 1rem;
  border-bottom: 1px solid #807373;
  cursor: pointer;
  opacity: ${({ visibility }) => (visibility ? "0.5" : "1")};
`;

export const AddPolicyTypeSmall = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  color: #807373;
  font-weight: 500;
  text-align: center;
  margin-right: 1rem;
  margin-left: 1rem;
  border-bottom: 1px solid #807373;
  cursor: pointer;
  opacity: ${({ visibility }) => (visibility ? "1" : "0.5")};
`;
