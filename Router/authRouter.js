const express = require("express");
const authRouter = express.Router();
const User = require("../Model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
authRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password, role } = req.body
    const newPassword = await bcrypt.hash(password, 8)
    const newUser = new User({ username, email, password: newPassword, role });

    await newUser.save();
    res.status(201).json({ message: "signup successfully", newUser })
  }
  catch (error) {
    res.status(404).send({ error: error.message })
  }
})
authRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await User.findOne({ username })
    if (!isUser) {
      return res.status(404).send("username not found")
    }
    const ispasswordMatch = await bcrypt.compare(password, isUser.password)
    if (!ispasswordMatch) {
      return res.status(404).send("password not matched")
    }

    const jwtToken = jwt.sign(
      { username: isUser.username, role: isUser.role },
      'your_jwt_secret',
      { expiresIn: '1d' }
    );
    res.status(201).json({ message: "login successfully", jwtToken })

  }
  catch (error) {
    res.status(404).send({ error: error.message })
  }
})

module.exports = authRouter;