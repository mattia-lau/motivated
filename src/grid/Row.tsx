import React from "react";
import styled from "styled-components";
import RowContext from "./RowContext";

const StyledRow = styled.div<any>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.flexDirection};
`;

export interface RowProps {
  gutter?: [number, number];
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
  align?: "start" | "center" | "flex-end";
  direction?: "column" | "row";
}

export const Row: React.FC<RowProps> = (props) => {
  const { gutter = [8, 8], children, justify = "start", align = "start", direction = "row" } = props;

  return (
    <RowContext.Provider value={{ gutter }}>
      <StyledRow justify={justify} align={align} flexDirection={direction}>
        {React.Children.map(children, (child: React.ReactElement) => {
          if (!child.props.span) {
            return React.cloneElement(child, { span: 24 / (children as any[]).length });
          }
          return child;
        })}
      </StyledRow>
    </RowContext.Provider>
  );
};
