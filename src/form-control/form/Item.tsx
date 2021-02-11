import invariant from "invariant";
import { throttle } from "lodash";
import React from "react";
import { Col, Row } from "../../grid";
import { Text } from "../../typography";

export interface FormItemProps {
  name: string;
  label: string;
  transformer?: (value: string) => any;
  validate?: (value: string | number) => boolean;
}

interface RefReturnedFunction {
  onSubmit: (dom: HTMLElement) => void;
}

export const FormItem = React.forwardRef<any, React.PropsWithChildren<FormItemProps>>((props, ref) => {
  const { name, label, transformer, validate, children } = props;

  const [isValid, setValid] = React.useState(true);

  invariant(React.Children.count(children) === 1, "Invalid Form Item Child");

  React.useImperativeHandle(ref, () => ({
    onFinish: handleOnSubmit,
    error: () => {
      if (!isValid) return { errors: [], name };
    },
  }));

  const handleOnSubmit = (dom: HTMLElement) => {
    const input = dom.getElementsByTagName("input")[0];
    if (input) {
      const inputType = input.getAttribute("type");
      let value: string;
      if (
        inputType === "text" ||
        inputType === "password" ||
        inputType === "number" ||
        inputType === "date" ||
        inputType === "file"
      ) {
        value = input.value;
      } else {
        value = String(input.checked);
      }

      validateValue(value);

      if (transformer) {
        value = transformer(value);
      }
      return { name, value };
    }
  };

  const validateValue = throttle((value: string | number) => {
    if (validate) {
      const valid = validate(value);
      setValid(valid);
    }
  }, 200);

  return (
    <Row direction="column">
      <Col span={24}>
        <Text>{label}</Text>
      </Col>
      <Col span={24}>
        {React.isValidElement(children) &&
          React.cloneElement(children as React.ReactElement<any>, {
            id: name,
            onChange: (evt) => {
              const { props } = children;
              if (props.onChange) {
                props.onChange(evt);
              }
              const value = evt.target.value;
              validateValue(value);
            },
          })}
        <div>
          <Text type="danger">{!isValid && "error"}</Text>
        </div>
      </Col>
    </Row>
  );
});
FormItem.displayName = "FormItem";
