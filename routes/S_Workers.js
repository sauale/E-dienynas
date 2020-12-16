const express = require("express");
const s_workers = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../schemas/S_Worker");

const Schedule = require("../schemas/Schedule");


s_workers.use(cors());


process.env.SECRET_KEY = "secret";

s_workers.get("/", function (req, res) {
  User.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

s_workers.post("/login", (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            username: user.username,
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

s_workers.post("/register", (req, res) => {
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

s_workers.post("/addSchedule", function(req,res){

  const data = {
    class: req.body.class,
    school: req.body.school,
    monday: req.body.monday,
    tuesday: req.body.tuesday,
    wednesday: req.body.wednesday,
    thursday: req.body.thursday,
    friday: req.body.friday
  }
  console.log("Data: ", data);
  Schedule.create(data)
  .then((user) => {
    res.json({ status:"Registered!" });
  })
  .catch((err) => {
    res.send("error: " + err);
  });
   

})



module.exports = s_workers;
