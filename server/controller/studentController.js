const Etudiant = require('../lib/prisma').etudiant
const Parent = require('../lib/prisma').parent;
const Classe = require("../lib/prisma").classe
const Filiere = require("../lib/prisma").filiere
const { parseISO, format } = require('date-fns');
const { ObjectId } = require('mongodb');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';



const generateMatricule = () => {
  const currentYear = new Date().getFullYear().toString().slice(-2);
  const charactersLength = characters.length
  const randomChars = Math.random().toString(36).substring(2, 12).toUpperCase();
  const specialChar = '-'
  return currentYear + specialChar + randomChars;
};

function generatePassword(nomEtudiant) {
  const currentYear = new Date().getFullYear().toString();
  // const threeFirstLetters = nomEtudiant.slice(0, 3).toUpperCase();
  const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
  const specialChar = '@';
  return currentYear + specialChar + randomChars;

}

exports.createStudent = async (req, res) => {
  const { nom, prenoms, sexe, email, filiereId, classeId,
    dateNaissPersonne, lieuNaissance,
    typeEtudiant, serieBAC, lieuResidence, contact,
    namePere, contactPere, nameMere, contactMere, isActive } = req.body;
  try {
    const students = await Etudiant.create({
      data: {
        nom: nom,
        prenoms: prenoms,
        sexe: sexe,
        email: email,
        filiere: { connect: { id: filiereId } },
        classe: { connect: { id: classeId } },
        dateNaissPersonne: new Date(dateNaissPersonne).toISOString(),
        matricule: generateMatricule(),
        motDePasse: generatePassword(),
        lieuNaissance: lieuNaissance,
        typeEtudiant: typeEtudiant,
        serieBAC: serieBAC,
        lieuResidence: lieuResidence,
        contact: contact,
        dateInscription: new Date(),
        namePere: namePere,
        contactPere: contactPere,
        nameMere: nameMere,
        contactMere: contactMere,
        isActive: true,
        parent: {
          create: {
            username: generateMatricule(),
            password: generatePassword()
          }
        },
      },
      include: {
        parent: true
      }
    });
    // console.log('Parent créé :', students);
    res.status(201).json({ "Etudiant": students });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Internal Server Error' });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Etudiant.findMany({
      include: {
        filiere: true, // Inclure les détails de la filière pour chaque étudiant
        classe: true   // Inclure les détails de la classe pour chaque étudiant
      }
    });

    // Transformer l'ID de la filière en son nom
    const studentsWithFiliereName = students.map(student => ({
      ...student,
      filiere: student.filiere ? student.filiere.nom : '' // Récupérer le nom de la filière si elle existe, sinon une chaîne vide
    }));

    // Transformer l'ID de la classe en son nom
    const studentsWithClassNames = studentsWithFiliereName.map(student => ({
      ...student,
      classe: student.classe ? student.classe.nom : '' // Récupérer le nom de la classe si elle existe, sinon une chaîne vide
    }));

    res.status(200).json({ students: studentsWithClassNames });
  } catch (error) {
    res.status(500).json({ "Erreur serveur": error });
  }
};

exports.getAllParents = async (req, res) => {
  try {
    const parents = await Parent.findMany()
    res.status(200).json({ parents })
  } catch (error) {
    res.status(500).json({ "Erreur serveur": error })
  }
}

exports.getOneStudent = async (req, res) => {
  const { id } = req.params
  try {
    const student = await Etudiant.findUnique({
      where: {
        id
      }
    })
    res.json({ student })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}

exports.deleteOneStudent = async (req, res) => {
  const { id } = req.params;

  try {
    // Assurez-vous que l'ID est dans le format ObjectId
    const objectId = ObjectId(id);

    const deleteStudent = await prisma.etudiant.delete({
      where: {
        id: objectId,
      },
    });

    if (deleteStudent) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: 'Étudiant non trouvé ou erreur lors de la suppression' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};



exports.deleteOneStudent = async (req, res) => {
  const { id } = req.params
  try {
    const deleteStudent = await Etudiant.delete({
      where: {
        id
      }
    })
    res.status(200).json({ deleteStudent })
  } catch (error) {
    console.error(error)
    res.status(406).send({ error })
  }
}

exports.searchStudents = async (req, res) => {
  try {
    const searchValue = req.query.searchValue.toLowerCase();
    const filteredStudents = await Etudiant.findMany({
      where: {
        nom: {
          contains: searchValue,
          mode: 'insensitive',
        },
      },
    });
    res.json(filteredStudents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la recherche des étudiants" });
  }
};


exports.authenticateStudent = async (req, res) => {
  const { matricule, motDePasse } = req.body;

  try {
    const student = await Etudiant.findUnique({
      where: {
        matricule,
      }
    });

    if (student && motDePasse === student.motDePasse) {
      console.log("Authentification réussie avec succès !!!")
      res.status(200).json({ success: true, message: 'Authentification réussie', studentId: student.id });
      // .id);
    } else {
      res.status(401).json({ success: false, message: 'Identifiant ou mot de passe incorrect' });
      console.log('Identifiant ou mot de passe incorrect');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de l\'authentification' });
  }
};

exports.authenticateParent = async (req, res) => {
  const { username, password } = req.body;

  try {
    const parent = await Parent.findUnique({
      where: {
        username,
      }
    });

    if (!parent) {
      return res.status(404).json({
        success: false,
        error: 'Matricule parent non trouvé',
      });
    }

    if (parent && password === parent.password) {
      // Une fois que l'authentification du parent est réussie, récupérez les étudiants associés à ce parent
      const students = await Etudiant.findMany({
        where: {
          parentId: parent.id // Supposons que vous ayez un champ parentId dans votre modèle Etudiant pour lier les étudiants à leurs parents
        }
      });

      console.log(students)
      res.status(200).json({
        success: true,
        message: 'Authentification réussie',
        parent,
        students
      });
    } else {
      res.status(404).json({
        success: false,
        error: 'Matricule ou mot de passe incorrect pour le parent',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Erreur lors de l'authentification du parent",
    });
  }
};

exports.getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({ success: false, error: 'ID non spécifié dans les paramètres de la requête' });
    }

    const student = await Etudiant.findUnique({
      where: {
        id: id, // Utilise la chaîne directement
      }
    });

    if (student) {
      res.status(200).json({ success: true, student });
    } else {
      res.status(404).json({ success: false, error: 'Étudiant non trouvé' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de la récupération des informations de l\'étudiant' });
  }
};


exports.getAllClassesWithStudents = async (req, res) => {
  try {
    const classes = await Classe.findMany(); // Récupérer toutes les classes
    const classesWithStudents = [];
    for (const classe of classes) {
      const students = await Etudiant.findMany({
        where: {
          classeId: classe.id
        }
      });
      classesWithStudents.push({ classe, students });
    }
    res.status(200).json({ classes: classesWithStudents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des classes avec les étudiants associés' });
  }
};

const Schedule = require('../lib/prisma').schedule;

// Création d'un emploi du temps pour une classe spécifique
// Création d'un emploi du temps pour une classe spécifique
exports.createScheduleForClass = async (req, res) => {
  const { classId } = req.params;
  const { day, time, title } = req.body;

  try {
    const schedule = await Schedule.create({
      data: {
        day,
        time,
        title,
        Classe: { connect: { id: classId } } // Utilisez "Classe" au lieu de "classe"
      }
    });
    res.status(201).json({ success: true, schedule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de la création de l\'emploi du temps pour la classe spécifiée' });
  }
};


// Récupération de l'emploi du temps pour une classe spécifique
exports.getScheduleForClass = async (req, res) => {
  const { classId } = req.params;

  try {
    const schedule = await Schedule.findMany({
      where: {
        classeId: classId
      }
    });
    res.status(200).json({ success: true, schedule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de la récupération de l\'emploi du temps pour la classe spécifiée' });
  }
};

// Mise à jour de l'emploi du temps
exports.updateSchedule = async (req, res) => {
  const { scheduleId } = req.params;
  const { day, time, title } = req.body;

  try {
    const updatedSchedule = await Schedule.update({
      where: {
        id: scheduleId
      },
      data: {
        day,
        time,
        title
      }
    });
    res.status(200).json({ success: true, updatedSchedule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de la mise à jour de l\'emploi du temps' });
  }
};

// Suppression d'un cours de l'emploi du temps
exports.deleteSchedule = async (req, res) => {
  const { scheduleId } = req.params;

  try {
    await Schedule.delete({
      where: {
        id: scheduleId
      }
    });
    res.status(200).json({ success: true, message: 'Cours supprimé de l\'emploi du temps avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de la suppression du cours de l\'emploi du temps' });
  }
};

// Implémentation de la récupération de tous les emplois du temps
exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findMany();
    res.status(200).json({ success: true, schedules });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de la récupération de tous les emplois du temps' });
  }
};
