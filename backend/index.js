const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let routes = require("./routes/job.routes");
var port = process.env.PORT || 8080;
var mongoURL = process.env.MONGO_URL || "mongodb://localhost/adhoccer";

// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.set("useFindAndModify", false);

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;

if (!db) console.log("Error connecting to db");
else console.log("DB connected successfully");

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

module.exports = app;
