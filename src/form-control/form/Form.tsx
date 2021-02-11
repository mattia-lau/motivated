import React from "react";
import styled from "styled-components";
import { FormItem } from "./Item";

const StyledForm = styled.form``;

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onFinish?: () => void;
  onFinishFailed?: (errors: any[]) => void;
}

export const Form: React.FC<FormProps> = (props) => {
  const { onFinish, onFinishFailed, ...other } = props;

  const children = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      const ref = React.useRef<any>(null);
      return React.cloneElement(child, {
        ref,
      });
    }
    return child;
  });

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const errors = [];
    React.Children.forEach(children, (child: any, index) => {
      const { displayName } = child.type;
      if (displayName === FormItem.displayName) {
        const dom = evt.currentTarget.children[index];
        const ref = child.ref.current;
        ref.onFinish(dom);
        const error = ref.error();
        if (error) errors.push(error);
      }
    });
    if (onFinish) onFinish();
    if (onFinishFailed) onFinishFailed(errors);
  };

  return (
    <StyledForm onSubmit={handleOnSubmit} {...other}>
      {children}
    </StyledForm>
  );
};
Form.displayName = "Form";
