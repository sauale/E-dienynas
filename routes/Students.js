const express = require("express");
const students = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Student = require("../schemas/Student");

students.use(cors());

process.env.SECRET_KEY = "secret";

students.get("/", function (req, res) {
 Student.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});



students.post("/registerStud", (req, res) => {
  const date = new Date();
  const userData = {
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    id: req.body.id,
    class: req.body.class,
    school: req.body.school,
    created: date,
  };

  Student.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          Student.create(userData)
            .then((user) => {
              res.json({ status: user.username + "Registered!" });
            })
            .catch((err) => {
              res.send("error: " + err);
            });
        });
      } else {
        // res.json({ error: "User already exists" });

        let kazkas = "z";
        res.send(kazkas);
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});
module.exports = students;
