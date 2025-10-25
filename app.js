const express = require("express");
const app = express();//create a instace of express to execute express


const studentData = require("./Router/student");
const userData = require("./Router/authRouter")
require('./db');

app.use(express.json());


app.use(userData)
app.use(studentData)



const port = 3000;
app.listen(port, () => { console.log(`http://localhost:${port}`) });