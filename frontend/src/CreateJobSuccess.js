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
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go to Homepage
        </Button>,
        <Button key="create">Create Another Job</Button>,
      ]}
    />
  );
}
