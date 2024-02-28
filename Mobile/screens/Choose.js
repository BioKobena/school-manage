import { View, Text, StyleSheet, Button, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useCallback } from 'react'
import COLORS from '../constants/colors'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Choose = () => {
    let [fontsLoaded] = useFonts({
        'Poppins Thin': require('../assets/fonts/Poppins-Thin.ttf'),
        'Poppins Black': require('../assets/fonts/Poppins-BoldItalic.ttf'),
        'Poppins Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    const navigation = useNavigation();

    const handleStudent = () => {
        navigation.navigate("Login")
    }

    const handleParent = () => {
        navigation.navigate("LoginParent")
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image style={{ position: "relative", top: "15%" }} source={require('../assets/background.png')} />


            <View style={{ zIndex: 10000, position: "absolute", gap: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: "Poppins Regular", fontSize: 25, textAlign: "justify", color: COLORS.white, marginBottom: 55 }}>Choisissez votre espace </Text>
                <Animated.View
                    entering={FadeInDown.delay(400).duration(5000).springify()}
                >
                    <TouchableOpacity activeOpacity={0.5} style={styles.studentButton} onPress={handleStudent}>
                        <Image style={styles.imageParent} source={{ uri: "https://cdn0.iconfinder.com/data/icons/high-school-10/340/education_college_university_graduation_student_graduate_school_success-1024.png" }} />
                        <Text style={styles.textCase}>Étudiant</Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View
                    entering={FadeInDown.delay(400).duration(5000).springify()}
                >
                    <TouchableOpacity activeOpacity={0.5} style={styles.parentButton} onPress={handleParent}>
                        <Image style={styles.imageParent} source={{ uri: "https://cdn2.iconfinder.com/data/icons/covid-26/512/old_man-parent-old-grandmother-aunt-1024.png" }} />
                        <Text style={styles.textCase}>Parent</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    studentButton: {
        width: 190,
        height: 190,
        backgroundColor: "#89c4f4",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        shadowColor: '#171717',
        elevation: 20,
    },
    imageParent: {
        width: 120,
        height: 120
    },
    parentButton: {
        width: 190,
        height: 190,
        backgroundColor: "#89c4f4",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        shadowColor: '#171717',
        elevation: 20,
    },
    textCase: {
        fontFamily: 'Poppins Regular',
        color: COLORS.white,
        fontSize: 20,
        // fontWeight: "900"
    }
})

export default Choose