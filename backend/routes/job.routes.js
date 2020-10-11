let router = require("express").Router();
const jobController = require("../controllers/job");

router.get("/", function (req, res) {
  res.json({
    status: "Good",
    message: "Backend API for Adhoc jobs",
  });
});

router.route("/jobs").get(jobController.listJobs).post(jobController.createJob);
router
  .route("/jobs/:job_id")
  .get(jobController.getJob)
  .delete(jobController.deleteJob)
  .put(jobController.updateJob);

module.exports = router;
