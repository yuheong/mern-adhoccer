import axios from "axios";

const DEV_URL = "http://localhost:8080";
const PRODUCTION_URL = "http://";

const instance = axios.create({
  baseURL: DEV_URL + "/api",
});

const listJobs = () => {
  return instance.get("jobs").then((res) => {
    return res.data;
  });
};

const getJob = (job_id) => {
  return instance.get(`jobs/${job_id}`).then((res) => {
    return res.data;
  });
};

const createJob = (body) => {
  return instance
    .post("jobs", body, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const deleteJob = (job_id) => {
  return instance.delete(`jobs/${job_id}`).then((res) => {
    return res.data;
  });
};

export default {
  listJobs,
  getJob,
  createJob,
  deleteJob,
};
