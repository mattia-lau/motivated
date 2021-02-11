import React from "react";
import { Col, Container, Row } from "../src";

export default {
  title: "Grid",
  component: Container,
};

export const Template = () => {
  return (
    <Container>
      <Row gutter={[24, 24]}>
        <Col>Col-1</Col>
        <Col>Col-2</Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        <Col span={4}>Col-1</Col>
        <Col span={4}>Col-2</Col>
      </Row>
    </Container>
  );
};

// export const Basic = Template.bind({});
// Basic.args = { label: "hello", color: "#ff0" };
