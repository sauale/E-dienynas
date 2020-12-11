const express = require("express");
const students = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

const Student = require("../schemas/Student");

const Mark = require("../schemas/Mark");


const Homework = require("../schemas/Homework");
students.use(cors());

process.env.SECRET_KEY = "secret";

students.post("/", function (req, res) {
 console.log(req.body.clas)
 Student.find({
  class: {$eq :req.body.clas},
   school: {$eq :req.body.school}

  })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});


students.post("/login", (req, res) => {
  console.log(req.body.username)
  Student.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            id: user.id,
            username: user.username,
            name: user.name,
            surname: user.surname,
            class: user.class,
            school: user.school,
            

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


students.post("/changeUsername", function (req, res) {
   const filter = {username: req.body.username};
   console.log(req.body.username)
   console.log(req.body.password)
   const updateDoc = {
     $set:{
       username: req.body.new_username
     }
   }

   Student.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (user) {
        
        if (bcrypt.compareSync(req.body.confirm_password, user.password)){
        Student.updateOne(filter,updateDoc)
        .then((user) => {
          res.json("Updated!");
        })}
        else{
        let kazkas = "z";
        res.send(kazkas);
        }
         } 
    })
    .catch((err) => {
      res.send("error: " + err);
    });



 
 });

 students.post("/getMark", function (req, res) {
  Mark.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

students.post("/getHomework", function (req, res) {
  console.log(req.body.clas)
  Homework.find({
  })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});


module.exports = students;
