import React from "react";
import { ThemeProvider as StyledTheme } from "styled-components";

interface ThemeProps {
  theme: any;
}

export const ThemeProvider: React.FC<ThemeProps> = (props) => {
  const { theme, children } = props;
  return <StyledTheme theme={theme}>{children}</StyledTheme>;
};
