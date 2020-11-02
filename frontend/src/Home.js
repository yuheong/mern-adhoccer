import React, { useState, useEffect } from "react";
import { Card, Space, List } from "antd";
import { Link, useHistory } from "react-router-dom";
import "./App.css";
import api from "./api";
import utils from "./utils";

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
          md: 1,
          lg: 2,
          xl: 3,
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
                  src={utils.getJobImage(job.category)}
                  height={300}
                  width={350}
                  alt={"Job-specific image"}
                />
              }
              key={job._id}
              title={job.category}
              style={{ width: 350 }}
            >
              <p>{job.name}</p>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
}
