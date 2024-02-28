const Etudiant = require('../lib/prisma').etudiant
const Parent = require('../lib/prisma').parent;
const { parseISO, format } = require('date-fns');

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
        console.log('Parent créé :', students);
        res.status(201).json({ "Etudiant": students });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Internal Server Error' });
    }
};

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Etudiant.findMany()
        res.status(200).json({ students })
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
  
      if (student && student.motDePasse === motDePasse) {
        res.status(200).json({ success: true, message: 'Authentification réussie', studentId: student.id });
        console.log(student.id);
      } else {
        res.status(401).json({ success: false, error: 'Matricule ou mot de passe incorrect' });
        console.log('Erreur de matricule');
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
          id: studentId
        }
      });

      console.log(student)
  
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
  
  