import React from "react";
import { ThemeProvider } from "styled-components";
import { Input, theme } from "../src";

export default {
  title: "Form Control",
  component: Input,
  //   argTypes: {
  //     color: { control: "color" },
  //   },
};

export const InputDemo = () => (
  <ThemeProvider theme={theme.light}>
    <Input />
  </ThemeProvider>
);
// export const Basic = Template.bind({});
// Basic.args = { label: "hello", color: "#ff0" };
