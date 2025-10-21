const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  rollNo: { type: Number, required: true, unique: true }
});

const studentModel = mongoose.model('student', studentSchema);
module.exports = studentModel;