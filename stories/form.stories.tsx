import React from "react";
import { Form, FormItem, Input, theme, ThemeProvider } from "../src";

export default {
  title: "Form Control",
  component: Form,
  //   argTypes: {
  //     color: { control: "color" },
  //   },
};

export const FormDemo = () => {
  const ref = React.useRef<any>(null);

  return (
    <ThemeProvider theme={theme.light}>
      <Form autoSave="off" autoComplete="off" onFinishFailed={console.log}>
        <FormItem
          transformer={(value: string) => Number(value)}
          name="test"
          label="test"
          validate={(value) => {
            if (value.toString().length > 1) return false;

            return true;
          }}
        >
          <Input
            placeholder="Test"
            onChange={() => {
              console.log("HI");
            }}
          />
        </FormItem>
      </Form>
    </ThemeProvider>
  );
};
// export const Basic = Template.bind({});
// Basic.args = { label: "hello", color: "#ff0" };
