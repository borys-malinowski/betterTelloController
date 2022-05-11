import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-image: url("./public/emergency.jpeg")
`;

type buttonType = {
  onClick: MouseEventHandler;
  text: string;
  img: string;
}

const Button = (props:buttonType) => {
  return <StyledButton onClick = {props.onClick} text = {props.text} ></StyledButton>;
};

export default Button;
