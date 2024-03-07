
const Etudiant = require('../lib/prisma').etudiant;
const Parent = require('../lib/prisma').parent;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generatePassword = () => {
  const currentYear = new Date().getFullYear().toString().slice(-2);
  const charactersLength = characters.length
  const randomChars = Math.random().toString(36).substring(2, 12).toUpperCase();
  const specialChar = '-'
  return currentYear + specialChar + randomChars;
};

function generateMatricule(nomEtudiant) {
  const currentYear = new Date().getFullYear().toString();
  // const threeFirstLetters = nomEtudiant.slice(0, 3).toUpperCase();
  const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
  const specialChar = '@';
  return currentYear + specialChar + randomChars;
}

const dateNaissPersonne = new Date();

// Importez les modèles nécessaires

exports.createStudent = async (req, res) => {
  const {
    nom,
    prenoms,
    sexe,
    email,
    filiereId,
    classeId,
    dateNaissPersonne,
    lieuNaissance,
    typeEtudiant,
    serieBAC,
    lieuResidence,
    contact,
    namePere,
    contactPere,
    nameMere,
    contactMere
  } = req.body;

  const matricule = generateMatricule();
  const password = generatePassword();

  try {
    // Création du parent
    const createdParent = await Parent.create({
      data: {
        username: generateMatricule(),
        password: generatePassword(),
      },
    });

    // Création de l'étudiant
    const student = await Etudiant.create({
      data: {
        nom,
        prenoms,
        sexe,
        email,
        filiereId,
        classeId,
        dateNaissPersonne,
        motDePasse: generatePassword(),
        matricule: generateMatricule(),
        lieuNaissance,
        typeEtudiant,
        serieBAC,
        lieuResidence,
        contact,
        namePere,
        contactPere,
        nameMere,
        contactMere,
        parentId: createdParent.id,
      },
    });

    console.log('Bienvenue ici');
    console.log(matricule);
    console.log(password);

    res.status(201).json({
      message: 'Étudiant et parent créés avec succès!',
      student,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la création de l'étudiant et du parent" });
  }
};




exports.deleteStudents = async (req, res) => {
  const { id } = req.params
  try {
    const deleteStudent = await Etudiant.delete({
      where: {
        id: parseInt(id)
      }
    })
    if (!deleteStudent) return res.status(404).json({ error: "Etudiant en erreur" })
    res.status(201).json({ message: "Etudiant supprimé avec succès", deleteStudent })
  } catch (error) {
    res.status(400).json({ error: "Echec de la suppression" })
    console.error(error)
  }
}

exports.updateStudents = async (req, res) => {
  const { id } = req.params
  const {
    nom,
    prenoms,
    lieuNaissance,
    typeEtudiant,
    serieBAC,
    lieuResidence,
  } = req.body;
  try {

    const updateStudent = await Etudiant.update({
      data: {
        nom,
        prenoms,
        matricule,
        motDePasse: password,
        lieuNaissance,
        typeEtudiant,
        serieBAC,
        lieuResidence,
        parent: {
          create: {
            matricule,
            motDePasse: password,
          },
        },
      },
      where: {
        id
      }
    })
    res.status(201).json({ message: "Modification effectué avec succès", updateStudent })
  } catch (error) {
    res.status(400).json({ error: "Echec de la mise à jour" })
    console.error(error)
  }
}

exports.showAllStudents = async (req, res) => {
  try {
    const allStudents = await Etudiant.findMany();
    res.json(allStudents);
    console.log(allStudents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la récupération des données des étudiants" });
  }
};

exports.showAllParents = async (req, res) => {
  try {
    const allParents = await Parent.findMany();
    res.json(allParents);
    console.log(allParents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la récupération des données des parents" });
  }
};

exports.getParentOfStudent = async (req, res) => {
  const { etudiantId } = req.params

  try {
    const studentWithParent = await Etudiant.findUnique({
      where: {
        id: etudiantId,
      },
      include: {
        parent: true,
      },
    });

    if (studentWithParent && studentWithParent.parent) {
      const parent = studentWithParent.parent;
      res.json(parent);
      console.log(parent);
    } else {
      res.status(404).json({ error: "Étudiant non trouvé ou sans parent associé." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la récupération des données du parent de l'étudiant." });
  }

};

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
        matricule
      }
    });


    if (student && student.motDePasse === motDePasse) {
      res.status(200).json({ success: true, message: 'Authentification réussie', studentId: student.id });
      console.log(student.id)
    } else {
      res.status(401).json({ success: false, error: 'Matricule ou mot de passe incorrect' });
      console.log('Erreur de matricule')
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de l\'authentification' });
  }
};

exports.authenticateParent = async (req, res) => {
  const { matricule, motDePasse } = req.body;

  try {
    const parent = await Parent.findUnique({
      where: {
        matricule,
      },
      include: {
        etudiants: true,
      },
    });

    if (!parent) {
      return res.status(404).json({
        success: false,
        error: 'Matricule parent non trouvé',
      });
    }

    if (parent.motDePasse === motDePasse) {
      res.status(200).json({
        success: true,
        message: 'Authentification réussie',
        parent,
      });
    } else {
      res.status(401).json({
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
  const { studentId } = req.params;

  try {
    const student = await Etudiant.findUnique({
      where: {
        id: parseInt(studentId)
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


