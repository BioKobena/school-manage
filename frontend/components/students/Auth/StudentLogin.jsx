import { View, Text, Image, Pressable, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../../Button';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'


const StudentLogin = () => {
    const navigation = useNavigation()
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [matricule, setMatricule] = useState('');
    const [password, setPassword] = useState('');
    
    const handleButtonPress = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://192.168.1.83:3000/authentificationStudent', {
                matricule,
                motDePasse: password,
            });
            if (response.data.success) {
                Alert.alert('Bienvenue')
                console.log(response.data)
                navigation.navigate('Etudiants', { studentId: response.data.studentId.id });
            } else {
                console.log('Authentification échouée');
            }
        } catch (error) {
            Alert.alert('Bienvenue')
            console.error('Erreur authentification:', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ position: "absolute", justifyContent: "center", alignItems: "center" }}>
                <LottieView style={{ width: "90%", height: "90%", alignItems: "center" }} source={require('./../welcomeStudent.json')} autoPlay loop />
            </View>
            <View style={{ flex: 1, marginHorizontal: 22, position: "relative", top: 250 }}>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Matricule</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 2,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Entrez votre matricule'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            value={matricule}
                            onChangeText={setMatricule}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Mot de passe</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 2,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Entrez votre mot de passe'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                            value={password}
                            onChangeText={setPassword}
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
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: COLORS.primary,
                        borderRadius: 10,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        opacity: isLoading ? 0.5 : 1,
                    }}
                    disabled={isLoading}
                    onPress={handleButtonPress}
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color={COLORS.white} style={{ marginRight: 10 }} />
                    ) : (
                        <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Se connecter</Text>
                    )}
                </TouchableOpacity>


                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Vous êtes parents ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Parents")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Parents</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default StudentLogin;