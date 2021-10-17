import styled from "styled-components";
import { device } from "../../../globals/breakpoints";

export const TitleContainer = styled.div`
  position: relative;
  align-self: flex-start;
`;
export const PolicyPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
  width: 70%;
  margin: 0 auto;

  @media ${device.sm} {
    width: 56%;
  }

  @media ${device.lg} {
    width: 80%;
  }
`;
