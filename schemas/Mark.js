const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MarkSchema = new Schema({
  stud_id: {
    type: Number
  },
  Mark: {
    type: Number,
    required: true
  },
  subject: {
    type: String

  },
});

module.exports = Mark = mongoose.model("marks",  MarkSchema );
