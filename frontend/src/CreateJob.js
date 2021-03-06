import React, { useState, useEffect } from "react";
import {
  Card,
  Space,
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  InputNumber,
  PageHeader,
} from "antd";
import { useHistory } from "react-router-dom";
import "./App.css";
import api from "./api";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

export default function CreateJob(props) {
  const [form] = Form.useForm();
  let history = useHistory();

  const onFinish = (values) => {
    const jobObject = JSON.stringify(values);
    api
      .createJob(jobObject)
      .then((res) => {
        history.push("/jobs/create/success", [values]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      name: "Event DJ at Sentosa Beach Club",
      category: "Deejay",
      pay: 3500,
      description: "Blah blah blah",
    });
  };

  function onChange(value) {
    console.log("changed", value);
  }

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "90vh" }}
    >
      <Col span={24}>
        <h2 style={{ textAlign: "center", margin: "30px" }}>
          Please fill up the form below to create a new job posting
        </h2>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select an option" allowClear>
              <Option value="Waiter">Waiter</Option>
              <Option value="Deejay">Deejay</Option>
              <Option value="Driver">Driver</Option>
              <Option value="Bartender">Bartender</Option>
              <Option value="Chef">Chef</Option>
            </Select>
          </Form.Item>
          <Form.Item name="pay" label="Salary">
            <InputNumber
              defaultValue={1000}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
