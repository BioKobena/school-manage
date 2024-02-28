const { filiere } = require('../lib/prisma')

const Filiere = require('../lib/prisma').filiere


exports.createFiliere = async (req, res) => {
    const { nom } = req.body
    try {

        const filiere = await Filiere.create({
            data: {
                nom: nom
            }
        })
        console.log(filiere)
        res.json({ "Création de classe ": filiere })
    } catch (error) {
        console.log(error)
        res.json({ "Error": error })
    }
}

exports.getFiliere = async (req, res) => {
    try {
        const filieres = await Filiere.findMany()
        console.log(filieres)
        res.json({filieres})

    } catch (error) {
        console.log("Erreur lors de la récupération des données")
        res.json({ "Error": error })
    }
}