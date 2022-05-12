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
    //filter: blur(10px);
    color: red;
  }
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 80px;
  height: 80px;
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
