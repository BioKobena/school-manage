exports.createTimeTable = async (req, res) => {

    const { classeId, imageUrl } = req.body;

    try {
        const createdTimetable = await EmploiDuTemps.create({
            data: {
                classe: {
                    connect: { id: classeId },
                },
                imageUrl,
            },
        });

        res.status(201).json({ success: true, timetable: createdTimetable });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Erreur lors de la création de l\'emploi du temps' });
    }
}
