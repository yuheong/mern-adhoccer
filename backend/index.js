const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let routes = require("./routes/job.routes");
var port = process.env.PORT || 8080;

// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/adhoccer", { useNewUrlParser: true });
let db = mongoose.connection;

if (!db) console.log("Error connecting to db");
else console.log("DB connected successfully");

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
