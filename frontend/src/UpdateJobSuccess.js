import React from "react";
import { Result, Button } from "antd";
import { Link, useLocation } from "react-router-dom";

export default function UpdateJobSuccess(props) {
  let { state } = useLocation();
  console.log(state);

  return (
    <Result
      status="info"
      title={`Successfully Updated Job: ${state[0].name}`}
      extra={[
        <p>Category: {state[0].category}</p>,
        <p>Salary: {state[0].pay}</p>,
        <p>Description: {state[0].description}</p>,
        <Button type="primary" key="console">
          <Link to="/">Go to Homepage</Link>
        </Button>,
      ]}
    />
  );
}
