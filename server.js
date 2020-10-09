var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const mongoose = require("mongoose");
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const mongoURI = "mongodb://localhost:27017/E-dienynas";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

var S_Workers = require("./routes/S_Workers");

app.use("/s_workers", S_Workers);
app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
