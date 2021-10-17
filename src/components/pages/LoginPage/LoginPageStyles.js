import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const LoginPageStyles = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50%;
  justify-content: space-evenly;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 40px 5px rgb(233 233 235 / 70%);
  position: relative;

  @media ${device.lg} {
    padding: 4rem;
  }
`;
