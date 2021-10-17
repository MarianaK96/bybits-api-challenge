import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const PolicyInfoStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  margin-bottom: 2rem;
  border-radius: 5px;

  height: 1rem;
  width: 14rem;
  border: none;
  border: 1px solid #b4b4b4;

  color: #807373;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-size: 0.9rem;

  @media ${device.sm} {
    height: 1rem;
    width: 18rem;
  }
`;

export const PolicyTitleStyles = styled.h4`
  padding-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
  color: #d0caca;
  font-size: 1rem;
  font-weight: 500;
  align-self: flex-start;
  margin: 0;
`;
