const Class = require('../lib/prisma').classe

exports.createClass = async (req, res) => {
    const { nom } = req.body
    try {

        const classe = await Class.create({
            data: {
                nom: nom
            }
        })

        res.json({ "Création de classe ": classe })
    } catch (error) {
        console.log(error)
        res.json({ "Error": error })
    }
}

exports.getClasse = async (req, res) => {
    try {
        const classe = await Class.findMany()
        console.log(classe)
        res.json({ classe })

    } catch (error) {
        console.log("Erreur lors de la récupération des données")
        res.json({ "Error": error })
    }
}