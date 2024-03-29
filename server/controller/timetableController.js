// const Schedule = require('../lib/prisma').schedule;

// // Création d'un emploi du temps pour une classe spécifique
// exports.createScheduleForClass = async (req, res) => {
//   const { classId } = req.params;
//   const { day, time, title } = req.body;

//   try {
//     const schedule = await Schedule.create({
//       data: {
//         day,
//         time,
//         title,
//         classe: { connect: { id: classId } }
//       }
//     });
//     res.status(201).json({ success: true, schedule });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Erreur lors de la création de l\'emploi du temps pour la classe spécifiée' });
//   }
// };

// // Récupération de l'emploi du temps pour une classe spécifique
// exports.getScheduleForClass = async (req, res) => {
//   const { classId } = req.params;

//   try {
//     const schedule = await Schedule.findMany({
//       where: {
//         classeId: classId
//       }
//     });
//     res.status(200).json({ success: true, schedule });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Erreur lors de la récupération de l\'emploi du temps pour la classe spécifiée' });
//   }
// };

// // Mise à jour de l'emploi du temps
// exports.updateSchedule = async (req, res) => {
//   const { scheduleId } = req.params;
//   const { day, time, title } = req.body;

//   try {
//     const updatedSchedule = await Schedule.update({
//       where: {
//         id: scheduleId
//       },
//       data: {
//         day,
//         time,
//         title
//       }
//     });
//     res.status(200).json({ success: true, updatedSchedule });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Erreur lors de la mise à jour de l\'emploi du temps' });
//   }
// };

// // Suppression d'un cours de l'emploi du temps
// exports.deleteSchedule = async (req, res) => {
//   const { scheduleId } = req.params;

//   try {
//     await Schedule.delete({
//       where: {
//         id: scheduleId
//       }
//     });
//     res.status(200).json({ success: true, message: 'Cours supprimé de l\'emploi du temps avec succès' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Erreur lors de la suppression du cours de l\'emploi du temps' });
//   }
// };
