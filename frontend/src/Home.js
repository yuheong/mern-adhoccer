import React, { useState, useEffect } from "react";
import { Card, Space, List } from "antd";
import { Link, useHistory } from "react-router-dom";
import "./App.css";
import api from "./api";

export default function Home(props) {
  const [jobs, setJobs] = useState([]);
  let history = useHistory();

  useEffect(() => {
    api.listJobs().then((res) => {
      setJobs(res.data);
    });
  }, []);

  useEffect(() => {
    console.log("Jobs changed", jobs);
  }, [jobs]);

  return (
    <>
      <h1>All Job Listings</h1>

      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={jobs}
        renderItem={(job) => (
          <List.Item>
            <Card
              hoverable
              onClick={() => {
                history.push(`/jobs/${job._id}`);
              }}
              cover={
                <img
                  src={
                    "https://img.freepik.com/free-photo/smiling-van-driver-portrait_53419-6444.jpg?size=626&ext=jpg&ga=GA1.2.109734625.1598054400"
                  }
                  height={300}
                  width={300}
                  alt={"Job-specific image"}
                />
              }
              key={job._id}
              title={job.category}
              style={{ width: 300 }}
            >
              <p>{job.name}</p>
            </Card>
          </List.Item>
        )}
      />

      <Space size={"middle"}>
        {jobs.map((job) => {
          let jobImg;
          if (job.category == "Bartender") {
            jobImg =
              "data:image/jpeg;base64,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";
          } else if (job.category == "Driver") {
            jobImg =
              "https://img.freepik.com/free-photo/smiling-van-driver-portrait_53419-6444.jpg?size=626&ext=jpg&ga=GA1.2.109734625.1598054400";
          }

          return (
            <Card
              hoverable
              onClick={() => {
                history.push(`/jobs/${job._id}`);
              }}
              key={job._id}
              cover={
                <img
                  src={jobImg}
                  height={300}
                  width={300}
                  alt={"Job-specific image"}
                />
              }
              title={job.category}
              style={{ width: 300 }}
            >
              <p>{job.name}</p>
              <p>{job.description}</p>
            </Card>
          );
        })}
      </Space>
    </>
  );
}