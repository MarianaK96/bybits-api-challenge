import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const TitleStyles = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  color: #272727;

  @media ${device.sm} {
    font-size: 2rem;
  }
`;
