import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const PolicyTitleStyles = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: 2rem;
  position: relative;
  color: #272727;

  align-self: flex-start;

  @media ${device.sm} {
    font-size: 2.5rem;
  }

  @media ${device.lg} {
    font-size: 3rem;
  }
`;
