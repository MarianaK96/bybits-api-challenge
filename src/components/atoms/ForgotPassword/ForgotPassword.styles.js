import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const ForgotPasswordStyles = styled.p`
  font-family: "Poppins", sans-serif;
  color: #b0c4de;
  border-bottom: solid 1px #b0c4de;
  font-weight: 500;
  align-self: flex-end;
  margin: 0;
  font-size: 0.8rem;

  @media ${device.sm} {
    font-size: 0.9rem;
  }
`;
