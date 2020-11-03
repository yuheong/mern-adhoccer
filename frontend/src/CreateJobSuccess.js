import React, { useState } from "react";
import { Result, Button } from "antd";
import { Link, useLocation } from "react-router-dom";

export default function CreateJobSuccess(props) {
  let { state } = useLocation();
  console.log(state);

  return (
    <Result
      status="success"
      title={`Successfully Created Job: ${state[0].name}`}
      extra={[
        <p>Category: {state[0].category}</p>,
        <p>Salary: {state[0].pay}</p>,
        <p>Description: {state[0].description}</p>,
        <Button type="primary" key="console">
          <Link to="/">Go to Homepage</Link>
        </Button>,
        <Button key="create">
          <Link to="/jobs/create">Create Another Job</Link>
        </Button>,
      ]}
    />
  );
}
