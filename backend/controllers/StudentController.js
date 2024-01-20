
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



exports.createStudent = async (req, res) => {
  const {
    nom,
    prenoms,
    lieuNaissance,
    typeEtudiant,
    serieBAC,
    lieuResidence,
  } = req.body;

  const matricule = generateMatricule(nom);
  const password = generatePassword();

  try {
    const student = await Etudiant.create({
      data: {
        nom:nom,
        prenoms:prenoms,
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
    });

    console.log('Bienvenue ici');
    console.log(matricule)
    console.log(password)

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
        id : parseInt(id)
      }
    })
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