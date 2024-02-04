const Mobile = require('../lib/prisma').mobile


exports.mobile = async (req, res) => {
    console.log(req.body.token)
    const token = req.body.token;
    try {
        const newToken = await Mobile.create({
            data: {
                token: token
            },
        });
        res.status(201).json({ message: 'Token du téléphone enregistré avec succès !', token: newToken, status: true });
    } catch (error) {
        console.error("Erreur d'envoi de la notification", error);
        res.status(500).json({ error: "Erreur d'envoi de la notification" });
    }
};

exports.getMobile = async (req, res) => {
    try {
        const getToken = await Mobile.findMany()
        res.status(201).json({ message: 'Affiche de la notification', getToken, status: true });
    } catch (error) {
        console.error("Erreur de récupération de la notification", error);
        res.status(500).json({ error: "Erreur de récupération de la notification" });
    }
};

exports.mobileUpdate = async (req, res) => {
    const id = req.params.id;
    const token = req.body.token;

    try {
        
        mobile = await Mobile.findFirst({
            where: {
                id: id
            }
        })

        if (!mobile) {
            mobile = await Mobile.create({
                data: {
                    token
                }
            })
        } else {
            mobile = await Mobile.update({
                where: {
                    id: id
                },
                data: {
                    token: token
                }
            })
        }
        res.status(201).json({ message: 'Token mise à jour !', updateToken: mobile, status: true });
    } catch (error) {
        console.error("Erreur", error);
        res.status(500).json({ error: "Erreur" });
    }
};