import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../constants/colors';
import { features } from '../../constants/features';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

const Student = () => {
  const navigation = useNavigation()

  const handleScreen = (navigationKey) => {
    navigation.navigate(navigationKey);
    console.log(navigationKey)
  };


  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          // marginLeft:,
          // position:"relative"
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
              display:"flex",
              flexDirection:"column",
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
            >Kedma Goze</Text>
            <Text
              style={{
                fontSize: 19,
                color: "#1c474d",
                flexWrap: "wrap",
                zIndex:1000,
                fontWeight:"700"
      
              }}
            >Étudiante en Science Éco</Text>
            <Text
              style={{
                fontSize: 16,
                color: "#111",
                flexWrap: "wrap",
                fontWeight:"600"
              }}
            >Licence 1</Text>
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
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#eff5f7",
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    width: 180,
    height: 120,
    padding: 20,
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
  }
})

export default Student
