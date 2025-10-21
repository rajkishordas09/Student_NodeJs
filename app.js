const express = require("express");
const app = express();//create a instace of express to execute express

const studentData = require("./Router/student");

require('./db');

app.use(express.json());

app.use(studentData);
const port = 3000;
app.listen(port, () => { console.log(`http://localhost:${port}`) });