const express = require("express");
const router = express.Router();//creates a new router object

const Students = require('../Model/student');
const firstMiddleware=require("../Middleware/firstmiddleware")
const secondMiddleware=require("../Middleware/secondmiddlewire")
router.post("/student", async (req, res) => {
  try {
    const student = req.body;

    const newStudent = new Students(student);
    await newStudent.save();
    res.status(201).json(student);
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
})
router.get("/student",firstMiddleware,secondMiddleware, async (req, res) => {
  try {
    const students = await Students.find();
    res.json(students);
  }
  catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get("/student/:roll", async (req, res) => {
  try {
    const studentById = await Students.findOne({ rollNo: parseInt(req.params.roll) })
    res.status(201).json(studentById);
    if (!studentById) {
      res.status(404).json("Student not found");
    }
  }
  catch (error) {
    res.status(404).json({ error: error.message });
  }
})

router.put("/student/:roll", async (req, res) => {
  try {
    const studentById = await Students.findOneAndUpdate(
      { rollNo: parseInt(req.params.roll) },
      req.body
    )
    if (!studentById) {
      res.status(404).json("Student not found");
    }
    const UpdateStudent = await Students.findOne({ rollNo: parseInt(req.params.roll) })
    res.status(201).json(UpdateStudent)

  }

  catch (error) {
    res.status(404).json({ error: error.message });
  }

});

router.delete("/student/:roll", async (req, res) => {
  try {
    const studentById = await Students.findOneAndDelete({ rollNo: parseInt(req.params.roll) })
    res.status(201).json("Student deleted Successfully");
  }
  catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;