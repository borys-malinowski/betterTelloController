import styled from "@emotion/styled";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

type StyledButtonProps = {
  img: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  font-size: 1em;
  &:hover {
    color: red;
  }
  &:active {
    background-color: aliceblue;
    border-width: 3px;
  }
  padding: 1rem;
  border: 2px solid palevioletred;
  border-radius: 10px;
  flex-grow: 1;
  background-image: ${({ img }) => {
    return `url(/images/${img})`;
  }};
`;

type ButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  img: string;
};

const Button = ({ ...rest }: PropsWithChildren<ButtonType>) => {
  return <StyledButton {...rest} />;
};

export default Button;
