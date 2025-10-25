const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  rollNo: { type: Number, unique: true, required: true }
});

const studentModel = mongoose.model('student', studentSchema);
module.exports = studentModel;