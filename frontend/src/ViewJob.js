import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Select,
  Divider,
  Row,
  Col,
  Carousel,
  PageHeader,
  Modal,
  Descriptions,
} from "antd";
import { Link, useParams, useHistory } from "react-router-dom";
import "./App.css";
import api from "./api";

const contentStyle = {
  height: "320px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function ViewJob(props) {
  let { job_id } = useParams();
  let history = useHistory();
  let [job, setJob] = useState([]);

  useEffect(() => {
    api.getJob(job_id).then((res) => {
      setJob(res.data);
    });
  }, []);

  const confirmDelete = () => {
    Modal.confirm({
      title: "Confirm Deletion",
      onOk: () => {
        console.log("confirm delete! " + job_id);
        api
          .deleteJob(job_id)
          .then((res) => {
            console.log(res);
            history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      },
    });
  };

  return (
    <>
      <Row justify="center">
        <Col span={12}>
          <PageHeader
            title={job.name}
            extra={[
              <Button key="1" type="primary">
                Edit job
              </Button>,
              <Button key="2" type="primary" danger onClick={confirmDelete}>
                Delete job
              </Button>,
            ]}
          />
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
          </Carousel>
          <Divider />
          <Descriptions title="Job Info" column={1}>
            <Descriptions.Item label="Job Category">
              {job.category}
            </Descriptions.Item>
            <Descriptions.Item label="Salary">${job.pay}</Descriptions.Item>
            <Descriptions.Item label="Job Description">
              {job.description}
            </Descriptions.Item>
          </Descriptions>
          {job_id}
        </Col>
      </Row>
    </>
  );
}
