const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Students = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
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
  class: {
    type: String,
  },
  school: {
    type: String,
  },

}

);

module.exports = Student = mongoose.model("students", Students);
