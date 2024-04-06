import { View, Text, Pressable, Image, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
// import * as SplashScreen from 'expo-splash-screen';


const { width, height } = Dimensions.get("window")

const Welcome = ({ navigation }) => {

    // let [fontsLoaded] = useFonts({
    //     'Poppins Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    //     'Poppins Black': require('../assets/fonts/Poppins-BoldItalic.ttf'),
    //     'Poppins Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    //     'Poppins Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    //     'Poppins SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    //     'Poppins Regular': require('../assets/fonts/Poppins-Regular.ttf'),

    // })

    // if (!fontsLoaded) {
    //     return <SplashScreen />
    // }


    const handleDone = () => {
        navigation.navigate("Choose");
    }

    return (

        <View style={styles.container}>
            <StatusBar style="light" />
            <Onboarding
                containerStyles={{ paddingHorizontal: 15 }}

                onDone={handleDone}
                onSkip={handleDone}
                pages={[
                    {
                        backgroundColor: '#a7f3d0',
                        image: (
                            <LottieView style={styles.lottie} source={require('../assets/onbard1.json')} autoPlay loop />
                        ),
                        title: 'Une athmosphère de savoir',
                        subtitle: 'Done with React Native Onboarding Swiper',

                    },
                    {
                        backgroundColor: '#fef3c7',
                        image: (
                            <LottieView style={styles.lottie} source={require('../assets/onbard2.json')} autoPlay loop />
                        ),
                        title: 'Bien entouré',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#a78bfa',
                        image: (
                            <LottieView style={styles.lottie} source={require('../assets/onbard3.json')} autoPlay loop />
                        ),
                        title: 'Être au courant de tout',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    lottie: {
        width: width * 0.9,
        height: width,
        alignItems: "center"
    }
})

export default Welcome

