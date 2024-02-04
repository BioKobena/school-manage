const Notification = require('../lib/prisma').notification
const Mobile = require("../lib/prisma").mobile
const axios = require("axios");

exports.notifications = async (req, res) => {
  const { title, content } = req.body;

  await apiFirebase(req, res);

  try {
    const newNotification = await Notification.create({
      data: {
        title,
        content
      },
    });

    res.status(201).json({ message: 'Notification créée avec succès', newNotification });
  } catch (error) {
    console.error("Erreur d'envoi de la notification", error);
    res.status(500).json({ error: "Erreur d'envoi de la notification" });
  }
};


exports.allNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findMany()
    res.status(201).json({ notifications })
    console.log("object");
  } catch (error) {
    res.json({ error: "Erreur de récupération des notifications" })
    console.error(error)
  }
}

exports.deleteNotifications = async (req, res) =>{
  const {id}= req.params;
  try {
    const deleteNotif = await Notification.delete({
      where:{
        id
      }
    })
    res.status(200).json({message:"------------Succès de suppression-----------", deleteNotif})
  } catch (error) {
    console.log(error);
    res.json({message: "Erreur de la suppression"})
  }
}

exports.resendNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const existingNotification = await Notification.findUnique({
      where: {
        id,
      },
    });

    if (!existingNotification) {
      return res.status(404).json({ message: 'Notification non trouvée' });
    }

    await apiFirebase({
      body: {
        title: existingNotification.title,
        content: existingNotification.content,
      },
    });

    res.status(200).json({ message: 'Notification renvoyée avec succès' });
  } catch (error) {
    console.error('Erreur lors du renvoi de la notification', error);
    res.status(500).json({ error: 'Erreur lors du renvoi de la notification' });
  }
};

const apiFirebase = async (req, res) => {
  try {

    await axios.get('').then((rr) => {

      rr.data.getToken.forEach(async (element) => {
        await axios.post("https://fcm.googleapis.com/fcm/send", {
          to: element.token,
          notification: {
            title: req.body.title,
            body: req.body.content
          },
        }, {
          headers: {
            "Authorization": "key=AAAAohxw37Y:APA91bF5x6YBxF7w2QNp3ueHLDLCsvnu1mYilgzQ1L6P4AL5tGBwv_hqPfig63NeDKAC-JMs1y0JbaOyFIDxkIOn0oYVD54xFPukYKDzL_kCeRjyRNfuHF5ZxXvGbGj-MiEiQ_MJSo2H"
          }
        }).then((rr) => {
          console.log("RESPONSE");
          if (rr.status == 200) {
            console.log("Sent");

          }
        }).catch((err) => {
          console.log("Not sent");
          console.error(err);
        })
      });

    }).catch((err) => {
      console.log("ERREUR DE RECUPERATION DES MOBILE");
      console.error(err);
      return res.status(400).json({ message: "Erreur", error: err });
    })
  } catch (error) {

    return res.status(500).json({ message: "Erreur interne au serveur" });
    
  }
}