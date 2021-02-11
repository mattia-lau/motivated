import React from "react";
import { Col, Row } from "../src";

export default {
  title: "Grid",
};

export const Template = () => {
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col>Col-1</Col>
        <Col>Col-2</Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        <Col span={4}>Col-1</Col>
        <Col span={4}>Col-2</Col>
      </Row>
    </div>
  );
};

// export const Basic = Template.bind({});
// Basic.args = { label: "hello", color: "#ff0" };
