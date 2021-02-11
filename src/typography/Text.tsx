import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span<TextProps>`
  overflow-wrap: break-word;
  color: ${(props) => (props.type ? props.theme[`${props.type}Color`] : "rgba(0, 0, 0, 0.85)")};
`;

export interface TextProps {
  type?: "secondary" | "success" | "warning" | "danger";
}

export const Text: React.FC<TextProps> = (props) => {
  const { type, children } = props;

  return <StyledSpan type={type}>{children}</StyledSpan>;
};
