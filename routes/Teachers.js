const express = require("express");
const teachers = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Teacher= require("../schemas/Teacher");

const Mark = require("../schemas/Mark");

const Homework = require("../schemas/Homework");

teachers.use(cors());

process.env.SECRET_KEY = "secret";

teachers.get("/", function (req, res) {
    Teacher.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

teachers.get("/marks", function (req, res) {
  Mark.find({})
  .then((data) => {
    console.log("Data: ", data);
    res.json(data);
  })
  .catch((error) => {
    console.log("error: ", daerrorta);
  });
});


teachers.post("/addMark", function(req,res){

  const data = {
    stud_id : req.body.stud_id,
    Mark : req.body.stud_grade,
    subject : req.body.stud_subject
  }
  console.log("Data: ", data);
  Mark.create(data)
  .then((user) => {
    res.json({ status:"Registered!" });
  })
  .catch((err) => {
    res.send("error: " + err);
  });
   

})


teachers.post("/addHomework", function(req,res){

  const data = {
    class : req.body.class,
    date : req.body.date,
    subject : req.body.subject,
    uzd : req.body.uzd,
    school : req.body.school,
  }
  console.log("Data: ", data);
  Homework.create(data)
  .then((user) => {
    res.json({ status:"Registered!" });
  })
  .catch((err) => {
    res.send("error: " + err);
  });
   

})


teachers.post("/login", (req, res) => {
 Teacher.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            username: user.username,
            name: user.name,
            surname: user.surname,
            school: user.school,
            subject: user.subject,
            classes: user.classes
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.send(token);
        } else {
          // Passwords don't match
          let kazkas = "z";
          res.send(kazkas);
        }
      } else {
        let kazkas = "z";
        res.send(kazkas);
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});


teachers.post("/registerTeacher", (req, res) => {
  const date = new Date();
  const userData = {
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    id: req.body.id,
    subject: req.body.subject,
    classes:req.body.classes,
    school: req.body.school,
    created: date,
  };

  Teacher.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          Teacher.create(userData)
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
module.exports = teachers;
