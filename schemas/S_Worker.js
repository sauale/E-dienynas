const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const S_WorkerSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = S_Worker = mongoose.model("s_workers", S_WorkerSchema);
