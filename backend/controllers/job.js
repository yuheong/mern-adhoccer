const jobModel = require("../models/jobModel");

let listJobs = async (req, res) => {
  const allJobs = await jobModel.find({});

  try {
    res.json({
      data: allJobs,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

let createJob = async (req, res) => {
  let job = new jobModel();
  job.name = req.body.name ? req.body.name : job.name;
  job.category = req.body.category;
  job.description = req.body.description;
  job.pay = req.body.pay;

  try {
    await job.save();
    res.json({
      data: job,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

let getJob = async (req, res) => {
  const job = await jobModel.findById(req.params.job_id);
  try {
    res.json({
      data: job,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

let deleteJob = async (req, res) => {
  try {
    const job = await jobModel.findByIdAndDelete(req.params.job_id);
    if (!job) {
      res.status(404).send("No job found with id");
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

let updateJob = async (req, res) => {
  try {
    console.log(req.body);
    const job = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
      upsert: true,
    });
    res.json({
      data: job,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  listJobs,
  createJob,
  getJob,
  deleteJob,
  updateJob,
};
