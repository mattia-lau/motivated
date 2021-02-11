import React from "react";
import styled from "styled-components";
import RowContext from "./RowContext";

interface StyledColProps {
  size?: string;
  gutter?: [number, number];
  spanSize?: number;
}

const StyledCol = styled.div<StyledColProps>`
  flex: ${(props) => props.size};
  padding: ${(props) => props.gutter[1] / 2}px ${(props) => props.gutter[0] / 2}px;
  width: ${(props) => (props.spanSize / 24) * 100}%;
`;

export interface ColProps {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];

export const Col: React.FC<ColProps> = (props) => {
  const { span, children } = props;
  const { gutter, wrap } = React.useContext(RowContext);

  return (
    <StyledCol gutter={gutter} spanSize={span}>
      {children}
    </StyledCol>
  );
};
