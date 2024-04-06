import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated';
import axios from 'axios';
// import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import COLORS from '../../../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import { backendUrl } from '../../../api-server.config';

const Card = ({ route }) => {
  console.log(route)
  const studentId = route.params.studentId;
  const [studentInfo, setStudentInfo] = useState(null);


  console.log(studentInfo)
  // let [fontsLoaded] = useFonts({
  //   'Poppins Thin': require('../../../assets/fonts/Poppins-Thin.ttf'),
  //   'Poppins Black': require('../../../assets/fonts/Poppins-BoldItalic.ttf'),
  //   'Poppins Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
  //   'Poppins Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
  //   'Poppins SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
  //   'Poppins Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
  // })

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(`${backendUrl}/students/${studentId}`);
        setStudentInfo(response.data.student);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'étudiant:', error);
      }
    };
    fetchStudentInfo();
  }, [studentId]);

  // if (!fontsLoaded) {
  //   return <SplashScreen />;
  // }

  return (
    <View style={styles.card}>
      <LinearGradient
        style={{
          borderRadius: 5,
          padding: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 15,
            height: 12,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,

        }}
        colors={[COLORS.blueLight, COLORS.bleu]}
      >
        <TouchableOpacity>
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Animated.Text
                entering={FadeInDown.delay(500).duration(1000).springify()}
                style={styles.ipifName}>Institut Polytechnique Catholique</Animated.Text>
              <Animated.Image
                entering={FadeInDown.delay(500).duration(15000).springify()}
                style={styles.ipifLogo} source={require('../assets/ipif-2.png')} />
            </View>
            <View style={styles.infoStudent}>
              <View style={styles.leftInfo}>
                <Animated.Text
                  entering={FadeInDown.delay(500).duration(15000).springify()}
                  style={styles.titleInfo}>Nom : <Text style={styles.infoEtudiant}>{studentInfo && studentInfo.nom}</Text>
                </Animated.Text>
                <Animated.Text
                  entering={FadeInDown.delay(500).duration(15000).springify()}
                  style={styles.titleInfo}>Prénoms : <Text style={styles.infoEtudiant}>{studentInfo && studentInfo.prenoms}</Text>
                </Animated.Text>
                <Animated.Text
                  entering={FadeInDown.delay(500).duration(15000).springify()}
                  style={styles.titleInfo}>Né(e) : <Text style={styles.infoEtudiant}>15/04/2002</Text>
                </Animated.Text>
                <Animated.Text
                  entering={FadeInDown.delay(500).duration(15000).springify()}
                  style={styles.titleInfo}>Mle : <Text style={styles.infoEtudiant}>{studentInfo && studentInfo.motDePasse}</Text>
                </Animated.Text>
                <Animated.Text
                  entering={FadeInDown.delay(500).duration(15000).springify()}
                  style={styles.titleInfo}>Filière : <Text style={styles.infoEtudiant}>{studentInfo && studentInfo.filiere}</Text>
                </Animated.Text>
                <Animated.Text
                  entering={FadeInDown.delay(500).duration(15000).springify()}
                  style={styles.titleInfo}>Statut : <Text style={styles.infoEtudiant}>{studentInfo && (studentInfo.typeEtudiant === "affecte" ? "Affecté" : "Non affecté")}</Text>
                </Animated.Text>
              </View>

              <View style={styles.rightInfo}>
                <Animated.Image
                  entering={FadeInDown.delay(1500).duration(15000).springify()}
                  style={styles.imageStudent} source={require('../assets/bio.png')} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        style={{
          borderRadius: 5,
          padding: 9,
          shadowColor: "#000",
          shadowOffset: {
            width: 15,
            height: 12,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,

        }}
        colors={[COLORS.blueLight, COLORS.bleu]}
      >

        <TouchableOpacity style={[styles.cardContainer, styles.behindSide]}>
          <Animated.View
            entering={FadeInDown.delay(500).duration(1000).springify()}
            style={styles.redBar}></Animated.View>
          <Animated.View
            entering={FadeInDown.delay(500).duration(1000).springify()}
            style={styles.qrCode}>
            <Image style={{ width: 100, height: 100 }} source={require('../assets/qrCode.png')} />
          </Animated.View>
          <View style={styles.schoolInfo}>
            <Animated.Text
              entering={FadeInDown.delay(500).duration(1000).springify()}
              style={styles.school}>II Plateaux-angré 7ème Tranche, Rue Du Café de Versailles, Bâtiment Top Auto</Animated.Text>
            <Animated.Text
              entering={FadeInDown.delay(500).duration(1000).springify()}
              style={styles.school}>(+225) 27 22 52 51 15 - 05 54 25 70 00 </Animated.Text>
            <Animated.Text
              entering={FadeInDown.delay(500).duration(1000).springify()}
              style={styles.school}> 01 BP 6671 Abidjan 01 - info@ipif.ci - www.ipif.ci </Animated.Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
      {/* <SwitchComponent /> */}

    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    borderRadius: 20,
    padding: 5,
    width: '100%',
    height: '100%',
    // fontFamily: "Poppins Bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  cardContainer: {
    borderRadius: 5,
    padding: 5,
    width: 350,
    height: '36%'
  },
  imageContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ipifLogo: {
    width: 70,
    height: 70
  },
  ipifName: {
    color: COLORS.light,
    // fontFamily: "Poppins SemiBold",
    width: "55%",
    flexWrap: "wrap",
    textAlign: "center"
  },
  infoStudent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  titleInfo: {
    color: COLORS.darkGray,
    // fontFamily: "Poppins Regular"
  },
  infoEtudiant: {
    // fontFamily: "Poppins SemiBold",
    color: COLORS.white
  },
  imageStudent: {
    width: 150,
    height: 150,
    // borderRadius: 20
  },
  redBar: {
    width: 315,
    height: 5,
    backgroundColor: "red"
  },
  behindSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15
  },
  schoolInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 0
  },
  school: {
    textAlign: "center",
    color: COLORS.grey,
    // fontFamily: "Poppins Regular",
    fontSize: 12
  }

});

export default Card;
