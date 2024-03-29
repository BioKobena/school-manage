import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../constants/colors';
import { features } from '../../constants/features';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'

const backendUrl = "http://192.168.1.83:3000"

const Student = ({ route }) => {


  const navigation = useNavigation();
  const { studentId } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    const scrollListener = scrollX.addListener(({ value }) => {
      const offset = value / 20;
      textTranslate.setValue(offset);
    });

    return () => {
      scrollX.removeListener(scrollListener);
    };
  }, [scrollX]);
  const textTranslate = new Animated.Value(0);
  
  const handleScreen = async (navigationKey) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    navigation.navigate(navigationKey, { studentInfo, studentId });
  };


  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(`${backendUrl}/students/${studentId}`);
        console.log(response.data.student)
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
  return (
    <>
      <ScrollView style={styles.container}>
        <SafeAreaView
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >

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
              <Image
                source={{ uri: "https://img.freepik.com/psd-gratuit/portrait-jeune-femme-coiffure-afro-dreadlocks_23-2150164403.jpg?size=626&ext=jpg&ga=GA1.2.1998763568.1698434096&semt=ais" }}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 65
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: "bold",
                  flexWrap: "wrap",
                  color: "#043b5c"
                }}
              >{studentInfo ? `${studentInfo.nom} ${studentInfo.prenoms}` : ''}</Text>
              <Text
                style={{
                  fontSize: 19,
                  color: "#1c474d",
                  flexWrap: "wrap",
                  zIndex: 1000,
                  fontWeight: "700"

                }}
              >{studentInfo ? studentInfo.filiere : ''}</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#111",
                  flexWrap: "wrap",
                  fontWeight: "600"
                }}
              >{studentInfo ? studentInfo.filiere : ''}</Text>
            </View>
          </View>
        </SafeAreaView>
        <View style={styles.menuEl}>
          {
            features.map((feature) => {
              return (
                <TouchableOpacity onPress={() => handleScreen(feature.navigation)} style={{ backgroundColor: feature.bgcolor, borderRadius: 15 }}>
                  <View style={[styles.cardContainer]} key={feature.id}>
                    <View style={styles.iconContainer}>
                      <Image style={{ width: 75, height: 75 }} source={{ uri: feature.icon }} />
                    </View>
                    <Text style={styles.cardTextOne}> {feature.item} </Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>

        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        )}
      </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#eff5f7",
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    width: 160,
    height: 120,
    padding: 15,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  cardText: {
    color: COLORS.white,
    fontWeight: "400",
    fontSize: 16,
    marginVertical: 15,
  },
  cardTextOne: {
    fontWeight: "bold",
    color: COLORS.white,
    fontSize: 18,
    textAlign: "center"
  },
  cardTextTwo: {
    borderBottomColor: COLORS.darkGray,
    color: COLORS.darkGray,
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 1,
    marginBottom: 3,
  },
  menuEl: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginBottom: 50
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
})

export default Student