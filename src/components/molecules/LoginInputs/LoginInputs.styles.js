import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../globals/breakpoints";

export const InputsStyle = styled.input`
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

  @media ${device.sm} {
    height: 1rem;
    width: 18rem;
  }
`;

export const PassContainer = styled.div`
  position: relative;
`;

export const LabelStyle = styled.label`
  color: #807373;
  font-family: "Montserrat", sans-serif;
`;

export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginBtnStyle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 2rem;
  border: none;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-color: #b0c4de;
  align-self: flex-end;

  height: 2.5rem;
  width: 5.5rem;

  cursor: pointer;

  & > p {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin: 0;

    @media ${device.sm} {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  top: 22%;
  right: 8%;
  transform: scale(1.3);
  cursor: pointer;
  color: #272727;
`;
