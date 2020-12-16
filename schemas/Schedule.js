const { data } = require("jquery");
const mongoose = require("mongoose");
const { stringify } = require("uuid");
const Schema = mongoose.Schema;

// Create Schema
const ScheduleSchema = new Schema({
  class: {
    type: String
  },
  school: {
    type: String

  },
  monday: {
    type: Array

  },
  tuesday: {
    type: Array

  },
  wednesday: {
    type: Array

  },
  thursday: {
    type: Array

  },
  friday: {
    type: Array

  },
  
});

module.exports = Shedule = mongoose.model("schedule", ScheduleSchema );
