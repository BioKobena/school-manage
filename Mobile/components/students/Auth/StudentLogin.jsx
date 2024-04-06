import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import COLORS from '../../../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import { backendUrl } from '../../../api-server.config';
import axios from 'axios'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification'


const StudentLogin = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [matricule, setMatricule] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${backendUrl}/authStudent`, {
                matricule,
                motDePasse,
            });

            console.log(response.data)
            if (response.data.success) {
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Super',
                    textBody: 'Bienvenue sur votre page',
                    button: 'Fermer',
                });
                const studentId = response.data.studentId
                console.log(studentId)
                navigation.navigate('EtudiantHome', { studentId: studentId });
            } else {
                Dialog.show({
                    type: ALERT_TYPE.WARNING,
                    title: 'Oups',
                    textBody: 'Authentification échouée',
                    button: 'Fermer',
                });
                console.log('Authentification échouée');
            }
        } catch (error) {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'Erreur',
                textBody: "Erreur lors de l'authentification...",
                button: 'Fermer',
            });
            console.error('Erreur authentification:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <AlertNotificationRoot>
            <View style={styles.container}>
                <StatusBar style="light" />
                <View style={{ position: "absolute", top: -450 }}>
                    <Image source={require('../../../assets/background.png')} />
                </View>
                <View style={{ zIndex: 1000, display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100vw", position: "absolute", top: 0 }}>
                    <Animated.Image
                        entering={FadeInUp.delay(400).duration(1000).springify()}
                        source={require('../../../assets/light.png')}
                        style={{ height: 160, width: 65, opacity: 1 }}
                    />
                </View>
                <View style={{ height: "100%", width: "100%", display: "flex", justifyContent: "space-around", paddingTop: 40, paddingBottom: 10 }}>
                    <View style={{ display: "flex", alignItems: "center" }}>
                        <Animated.Text
                            entering={FadeInUp.duration(1000).springify()}
                            style={{ color: COLORS.white, fontWeight: "bold", fontSize: 30 }}
                        >
                            Connexion étudiant
                        </Animated.Text>
                    </View>

                    <View style={{ display: "flex", alignItems: "center", marginHorizontal: 5, gap: 4 }}>
                        <Animated.View
                            entering={FadeInDown.duration(1000).springify()}
                            style={{ backgroundColor: COLORS.grey, padding: 10, borderRadius: 5, width: "100%" }}
                        >

                            <TextInput
                                placeholder="Matricule"
                                placeholderTextColor={COLORS.bleu}
                                value={matricule}
                                onChangeText={(text) => setMatricule(text)}
                            />
                        </Animated.View>
                        <Animated.View
                            entering={FadeInDown.delay(200).duration(1000).springify()}
                            style={{ backgroundColor: COLORS.grey, padding: 10, borderRadius: 5, width: "100%", marginBottom: 15 }}
                        >

                            <TextInput
                                placeholder='Entrez votre mot de passe'
                                placeholderTextColor={COLORS.bleu}
                                // secureTextEntry
                                value={motDePasse}
                                onChangeText={(text) => setMotDePasse(text)}
                                secureTextEntry={isPasswordShown}
                                style={{
                                    width: "100%"
                                }}
                            />

                            <TouchableOpacity
                                onPress={() => setIsPasswordShown(!isPasswordShown)}
                                style={{
                                    position: "absolute",
                                    right: 12
                                }}
                            >
                                {
                                    isPasswordShown == true ? (
                                        <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                    ) : (
                                        <Ionicons name="eye" size={24} color={COLORS.black} />
                                    )
                                }

                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View
                            className="w-full"
                            style={{ width: '100%' }}
                            entering={FadeInDown.delay(400).duration(1000).springify()}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 18,
                                    marginBottom: 4,
                                    backgroundColor: COLORS.bleu,
                                    borderRadius: 10,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    opacity: isLoading ? 0.5 : 1,
                                }}
                                disabled={isLoading}
                                onPress={handleLogin}
                            >
                                {isLoading ? (
                                    <ActivityIndicator size="small" color={COLORS.white} style={{ marginRight: 10 }} />
                                ) : (
                                    <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Se connecter</Text>
                                )}
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View >
            </View >
        </AlertNotificationRoot>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

})

export default StudentLogin;