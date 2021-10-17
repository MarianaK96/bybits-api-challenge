import styled from "styled-components";
import { device } from "../../../globals/breakpoints";
import { Link } from "react-router-dom";

export const LogoutBtnStyles = styled(Link)`
  position: absolute;
  top: 0.95rem;
  right: 2.2rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;


  & > p {
    color: #272727;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin: 0;
    &:hover {
      border-bottom: 1px solid #272727;
    }
    
  }

  @media ${device.sm} {
    font-size: 1.2rem;
  }
}
`;
