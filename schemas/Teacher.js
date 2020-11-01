const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Teachers = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  id: {
    type: Number,
  },
  subject: {
    type: String,
  },
  school: {
    type: String,
  },
  classes:{
    type:[String],
  }
});

module.exports = Teacher = mongoose.model("teachers", Teachers);
