import { View, Text, Image, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../../Button';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';


const StudentLogin = () => {

    const navigation = useNavigation()
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false)
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
                
                    <Button
                        title="Se connecter"
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                            fontWeight: "bold"
                        }}
                    onPress={() => navigation.navigate("Etudiants")}
                    />


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