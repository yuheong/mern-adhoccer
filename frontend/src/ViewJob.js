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
import utils from "./utils";

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

  const handleEdit = () => {
    history.push(`/jobs/${job_id}/edit`);
  };

  return (
    <>
      <Row justify="center">
        <Col span={10}>
          <PageHeader
            title={job.name}
            extra={[
              <Button key="1" type="primary" onClick={handleEdit}>
                Edit job
              </Button>,
              <Button key="2" type="primary" danger onClick={confirmDelete}>
                Delete job
              </Button>,
            ]}
          />
          <Carousel autoplay>
            {job.category &&
              utils.getJobImages(job.category) &&
              utils.getJobImages(job.category).map((imageUrl, id) => {
                return (
                  <img
                    key={id}
                    src={imageUrl}
                    height={400}
                    width={400}
                    alt={"Job-specific image"}
                  />
                );
              })}
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
