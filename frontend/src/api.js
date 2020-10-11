import axios from "axios";

const DEV_URL = "http://localhost:8080";
const PRODUCTION_URL = "http://";

const instance = axios.create({
  baseURL: DEV_URL + "/api",
});

const getJobs = () => {
  return instance.get("jobs").then((res) => {
    return res.data;
  });
};

const getJob = () => {};

const createJob = (body) => {
  return instance.post("jobs").then((res) => {
    return res.data;
  });
};

export default {
  getJobs,
  getJob,
  createJob
};
