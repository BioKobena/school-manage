const Professeur = require('../lib/prisma').professeur


exports.createTeacher = async (req, res) => {
    const { nom, prenoms, email, motDePasse } = req.body
    try {
        const teacher = await Professeur.create({
            data: {
                nom,
                prenoms,
                email,
                motDePasse
            }
        })
        res.status(201).json({ teacher })
    } catch (error) {
        console.log(error)
        res.status(404).json({ "error": error })
    }
}