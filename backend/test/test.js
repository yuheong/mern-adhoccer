const supertest = require("supertest");
const app = require("../index");
const JobModel = require("../models/jobModel");
const mongoose = require("mongoose");
const WAREHOUSE_ASST_JOB = "5f9556a96b982605cb8f3853";
const NON_EXISTENT_JOB = "5f9556a96b982605cb8f3852";
const should = require("chai").should();

describe("App", () => {
  it("Should return status code 200 and hello world", (done) => {
    supertest(app)
      .get("/")
      .expect(200)
      .expect("Hello World!")
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});

describe("Jobs", () => {
  before(() => {
    mongoose.connect("mongodb://localhost/adhoccer", { useNewUrlParser: true });

    // Dummy job for tests
    const warehouseJob = new JobModel({
      _id: mongoose.Types.ObjectId(WAREHOUSE_ASST_JOB),
      name: "Warehouse Assistant",
      category: "Logistics",
      description: "Warehouse assistant for XY company",
      pay: 2000,
    });
    warehouseJob.save((err) => {
      if (err) return err;
    });
  });

  it("Should get all jobs listed", (done) => {
    supertest(app)
      .get("/api/jobs")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it("Should create a job", (done) => {
    supertest(app)
      .post("/api/jobs")
      .send({
        name: "Uber Driver",
        category: "Driver",
        description: "Uber driver",
        pay: 2500,
      })
      .expect(201)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it("Should get a specific job", (done) => {
    supertest(app)
      .get("/api/jobs/" + WAREHOUSE_ASST_JOB)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it("Should fail to get a non-existing job", (done) => {
    supertest(app)
      .get("/api/jobs/" + NON_EXISTENT_JOB)
      .expect(200)
      .expect({ data: null })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it("Should update an existing job", (done) => {
    supertest(app)
      .put("/api/jobs/" + WAREHOUSE_ASST_JOB)
      .send({
        name: "Container Driver",
        category: "Driver",
        description: "Driver for AZ company",
        pay: 4500,
      })
      .expect(200)
      .expect((res) => {
        should.equal(res.body.data.name, "Container Driver");
        should.equal(res.body.data.category, "Driver");
        should.equal(res.body.data.description, "Driver for AZ company");
        should.equal(res.body.data.pay, 4500);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it("Should delete an existing job", (done) => {
    supertest(app)
      .delete("/api/jobs/" + WAREHOUSE_ASST_JOB)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it("Should return 404 not found when deleting a non-existing job", (done) => {
    supertest(app)
      .delete("/api/jobs/" + NON_EXISTENT_JOB)
      .expect(404)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  // Clean up mongodb
  after(() => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done());
    });
  });
});
