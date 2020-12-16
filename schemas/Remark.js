const { data } = require("jquery");
const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const { stringify } = require("uuid");
const Schema = mongoose.Schema;

// Create Schema
const RemarkSchema = new Schema({
  stud_id: {
    type: Number
  },
  remark: {
    type: String

  },
  type: {
    type: String

  },
  subject: {
    type: String

  },
  date: {
    type: Date

  }
});

module.exports = Remark = mongoose.model("remark", RemarkSchema );
