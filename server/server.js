const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json());

//Mes Controllers Etudiants
const studentOptions = require('./controller/studentController')


//Mes controlleurs Filières
const filiereStudent = require('./controller/filiereController')


//Mes controlleurs Classes
const createClassroom = require('./controller/classController')

// Mes middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json());

//Mes routes Classes
app.post('/class', createClassroom.createClass)
app.get('/listClass', createClassroom.getClasse)

//Mes routes Filières
app.post('/filiere', filiereStudent.createFiliere)
app.get('/listFiliere', filiereStudent.getFiliere)


//Mes routes Etudiants Web
app.post('/createStudent', studentOptions.createStudent)
app.get('/getStudents', studentOptions.getAllStudents)
app.get('/getOneStudent/:id', studentOptions.getOneStudent)
app.get('/deleteStudent/:id', studentOptions.deleteOneStudent)
app.get('/searchStudents/', studentOptions.searchStudents)
app.get('/parents', studentOptions.getAllParents)
app.post('/authParent', studentOptions.authenticateParent)

//Mes routes Mobile
app.post('/authStudent', studentOptions.authenticateStudent)
app.post('/authParent', studentOptions.authenticateParent)
app.get('/students/:id', studentOptions.getStudentById)




app.get('/', (req, res) => {
    res.
        send
        ('<h1>Bienvenue sur le serveur</h1>')
})

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
})