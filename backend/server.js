// server.js

const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const studentController = require('./controllers/StudentController.js');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json());

// app.use('/create', ); 
app.post('/create', studentController.createStudent);
app.delete('/deleteStudent/:id', studentController.deleteStudents);
app.get('/getStudent', studentController.showAllStudents)
app.post('/authentificationStudent', studentController.authenticateStudent)
app.get('/students/:studentId', studentController.getStudentById);
app.post('/authentificationParent', studentController.authenticateParent)
app.post('/student-parent', studentController.createStudentAndParent)
app.get('/searchStudents/', studentController.searchStudents)
app.get('/parents', studentController.showAllParents)
app.get('/parents/:id', studentController.getParentOfStudent)

app.get('/', (req, res) => {
  res.json("Backend of school application");
});

app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port : ${port}`);
});
