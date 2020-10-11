const mongoose = require("mongoose");

let jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: String,
  description: String,
  pay: {
    type: Number,
    required: true,
  },
});

const jobModel = mongoose.model("Job", jobSchema);

module.exports = jobModel;
