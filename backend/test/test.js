const supertest = require("supertest");
const app = require("../index");
const JobModel = require("../models/jobModel");
const mongoose = require("mongoose");
const WAREHOUSE_ASST_ID = "5f9556a96b982605cb8f3853";

describe("App", () => {
  it("Should return status code 200 and hello world", (done) => {
    supertest(app)
      .get("/")
      .expect(200)
      .expect("Hello World!")
      .end((err, res) => {
        if (err) {
          done(err);
        }
        done();
      });
  });
});

describe("Jobs", () => {
  before(() => {
    const warehouseJob = new JobModel({
      _id: mongoose.Types.ObjectId(WAREHOUSE_ASST_ID),
      name: "Warehouse Assistant",
      category: "Logistics",
      description: "Warehouse assistant for XY company",
      pay: 2000,
    });
    warehouseJob.save((err) => {
      if (err) return err;
    });
  });

  //Test listing of all jobs
  it("Should get all jobs listed", (done) => {
    supertest(app)
      .get("/api/jobs")
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        done();
      });
  });

  it("Should create a job", (done) => {
    supertest(app)
      .post("/api/jobs")
      .send({
        name: "Warehouse Driver",
        category: "Logistics",
        description: "Warehouse driver for XY company",
        pay: 2500,
      })
      .expect(201)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        done();
      });
  });

  it("Should get a specific job", (done) => {
    supertest(app)
      .get("/api/jobs/" + WAREHOUSE_ASST_ID)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        done();
      });
  });

  it("Should fail to get a non-existing job", (done) => {
    supertest(app)
      .get("/api/jobs/" + "5f9556a96b982605cb8f3852")
      .expect(200)
      .expect({ data: null })
      .end((err, res) => {
        if (err) {
          done(err);
        }
        done();
      });
  });
});
