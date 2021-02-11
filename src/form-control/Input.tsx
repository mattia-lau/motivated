import React from "react";
import style from "styled-components";

const StyledInput = style.input`
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: ${(props) => props.theme.color};
    font-size: 14px;
    line-height: 1.5715;
    background-color: ${(props) => props.theme.backgroundColor};
    background-image: none;
    border: ${(props) => `1px solid ${props.theme.borderColorBase}`};
    border-radius: ${(props) => props.theme.borderRadiusBase};

    &:focus {

    }

    &:hover {

    }
`;

export interface InputProps extends React.FormHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password";
  name?: string;
  // Controlled
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  // Uncontrolled
  defaultValue?: string;
}

const Component: React.FC<InputProps> = (props) => {
  const { type = "text", ...other } = props;

  return <StyledInput type={type} {...other} />;
};

export const Input = React.memo(Component);
// Input.displayName = "input";
