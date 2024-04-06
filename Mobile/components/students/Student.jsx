import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../constants/colors';
import { features } from '../../constants/features';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import { backendUrl } from '../../api-server.config';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import * as SplashScreen from 'expo-splash-screen';
import messaging from '@react-native-firebase/messaging';
import ToastManager, { Toast } from 'toastify-react-native'





const Student = ({ route }) => {

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }



  // useEffect(() => {

  //   if (requestUserPermission()) {
  //     messaging().getToken().then((token) => {
  //       console.log("first time Token : ", token)
  //       sendTokenToBackend(token)
  //       console.log(sendTokenToBackend)
  //     })
  //   } else {
  //     console.log("authStatus", authStatus)
  //   }

  //   messaging().getInitialNotification().then(async (remoteMessage) => {
  //     if (remoteMessage) {
  //       console.log("Notification caused opened App", remoteMessage.notification);
  //     }
  //   })


  //   messaging().onNotificationOpenedApp(async (remoteMessage) => {
  //     console.log("Notification on open app", remoteMessage.notification)
  //   })


  //   messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //     console.log("Message handled in background", remoteMessage)
  //   })

  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     Toast.success(remoteMessage.notification.body)
  //     // Alert.alert("A new FCM message arrived !", JSON.stringify(remoteMessage.notification))
  //   })

  //   return unsubscribe
  // }, [])


  // const sendTokenToBackend = async (token) => {
  //   try {
  //     const response = await axios.post(`${api}/token`, { token }); // Envoyer le token à votre backend
  //     console.log('Réponse de l\'API :', response.data);
  //   } catch (error) {
  //     console.error('Erreur lors de l\'envoi du token au backend :', error);
  //   }
  // }


  // const [notifications, setNotifications] = useState([])
  // useEffect(async () => {
  //   try {
  //     const response = await axios.get(`${api}/getNotifications`);
  //     console.log(response.data.notifications)
  //     setNotifications(response.data.notifications)
  //   } catch (error) {
  //     console.error('Erreur lors de l\'envoi du token au backend :', error);
  //   }

  // }, [])


  // let [fontsLoaded] = useFonts({
  //   'Poppins Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
  //   'Poppins Black': require('../../assets/fonts/Poppins-BoldItalic.ttf'),
  //   'Poppins Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  //   'Poppins Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  //   'Poppins SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  //   'Poppins Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  // })


  console.log(route)
  const studentId = route.params.studentData || {};
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);


  const handleScreen = async (navigationKey) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // navigation.navigate(navigationKey)
    navigation.navigate(navigationKey, { studentInfo, studentId });
  };

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(`${backendUrl}/students/${studentId}`);
        setStudentInfo(response.data.student);
      } catch (error) {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Erreur',
          textBody: "Erreur",
          button: 'fermer',
        })
        console.error('Erreur lors de la récupération des informations de l\'étudiant:', error);
      }
    };
    fetchStudentInfo();
  }, [studentId]);


  const handleLogout = () => {
    navigation.navigate('Welcome')
  }

  // if (!fontsLoaded) {
  //   return <SplashScreen />
  // }

  return (
    <>

      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        <SafeAreaView
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 40,
              right: 5,
              padding: 10,
              backgroundColor: "red",
              borderRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={handleLogout}
          >
            <Icon name="power-settings-new" size={20} color="#fff" style={{ marginRight: 5 }} />
          </TouchableOpacity>
          <View
            style={{
              height: 200,
              width: '100%',
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5
            }}
          >
            <View>
              <Animated.Image
                entering={FadeInDown.delay(200).duration(1000).springify()}
                source={{ uri: "https://img.freepik.com/psd-gratuit/portrait-jeune-femme-coiffure-afro-dreadlocks_23-2150164403.jpg?size=626&ext=jpg&ga=GA1.2.1998763568.1698434096&semt=ais" }}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 65
                }}
              />
            </View>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  flexWrap: "wrap",
                  color: "#043b5c",
                  // fontFamily: "Poppins SemiBold"
                }}
              >{studentInfo ? `${studentInfo.nom} ${studentInfo.prenoms}` : 'Bio Paul Kobena'}</Text>
              <Text
                style={{
                  fontSize: 19,
                  color: COLORS.orangeColor,
                  flexWrap: "wrap",
                  zIndex: 1000,
                  // fontFamily: "Poppins Medium"

                }}
              >{studentInfo ? studentInfo.classe : 'Genie Logiciel'}</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#111",
                  flexWrap: "wrap",
                  fontWeight: "600",
                  // fontFamily: "Poppins SemiBold"
                }}
              >{studentInfo ? studentInfo.filiere : 'Master 1'}</Text>
            </Animated.View>
          </View>
        </SafeAreaView>

        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={styles.menuEl}>
          {
            features.map((feature) => {
              return (
                <TouchableOpacity onPress={() => handleScreen(feature.navigation)} style={styles.menuItems}>
                  <View style={[styles.cardContainer]} key={feature.id}>
                    <View style={styles.iconContainer}>
                      <Image style={{ width: 50, height: 50 }} source={{ uri: feature.icon }} />
                    </View>
                    <Text style={styles.cardTextOne}> {feature.item} </Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </Animated.View>

        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.bleu} />
          </View>
        )}
      </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#eff5f7",
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    width: "100%",
    height: 120,
    padding: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30
  },
  cardTextOne: {
    color: "#eff5f7",
    fontSize: 18,
    // fontFamily: "Poppins Regular"
  },
  menuEl: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 20,
    marginBottom: 50
  },
  menuItems: {
    width: "100%",
    height: 60,
    backgroundColor: "#89c4f9",
    borderRadius: 5,
    borderColor: COLORS.blueLight,
    borderWidth: 1.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"

  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 15,
    height: 15,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },

})

export default Student