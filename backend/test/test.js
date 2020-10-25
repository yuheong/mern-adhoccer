const chai = require("chai");
const supertest = require("supertest");
const app = require("../index");

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
  // Test listing of all jobs
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

  it.skip("Should get a specific job", (done) => {});
});
