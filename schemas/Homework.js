const { data } = require("jquery");
const mongoose = require("mongoose");
const { stringify } = require("uuid");
const Schema = mongoose.Schema;

// Create Schema
const HomeworkSchema = new Schema({
  class: {
    type: String
  },
  date: {
    type: Date

  },
  subject: {
    type: String

  },
  uzd: {
    type: String

  },
  school: {
    type: String

  },
});

module.exports = Homework = mongoose.model("homework", HomeworkSchema );
