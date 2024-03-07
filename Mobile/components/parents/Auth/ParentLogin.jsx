// import { View, Text, Image, Pressable, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native'
// import React, { useState } from 'react'
// import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
// import { SafeAreaView } from "react-native-safe-area-context";
// import COLORS from '../../constants/colors';
// import { Ionicons } from "@expo/vector-icons";
// import LottieView from 'lottie-react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios'


// const backendUrl = 'http://192.168.1.83:3000'

// const ParentLogin = () => {
//     const navigation = useNavigation()
//     const [isPasswordShown, setIsPasswordShown] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [matricule, setMatricule] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLoginParent = async () => {
//         setIsLoading(true);

//         try {
//             const response = await axios.post(`${backendUrl}/authentificationParent`, {
//                 matricule,
//                 motDePasse: password,
//             });

//             if (response.data.success) {
//                 Dialog.show({
//                     type: ALERT_TYPE.SUCCESS,
//                     title: 'Super',
//                     textBody: 'Bienvenue sur votre page',
//                     button: 'close',
//                 })
//                 const parentInfo = response.data.parent;
//                 console.log(parentInfo)
//                 const etudiantInfo = parentInfo.etudiants[0];
//                 navigation.navigate('ParentView', { parentInfo, etudiantInfo });

//             } else {
//                 Dialog.show({
//                     type: ALERT_TYPE.WARNING,
//                     title: 'Erreur',
//                     textBody: 'Matricule ou mot de passe incorrect',
//                     button: 'close',
//                 })
//             }
//         } catch (error) {
//             Dialog.show({
//                 type: ALERT_TYPE.DANGER,
//                 title: 'Erreur',
//                 textBody: "Erreur lors de l'authentification...",
//                 button: 'close',
//             })
//             console.error('Erreur authentification:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <AlertNotificationRoot>
//             <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
//                 <View style={{ position: "absolute", justifyContent: "center", alignItems: "center" }}>
//                     <LottieView style={{ width: "90%", height: "90%", alignItems: "center" }} source={require('./parentWelcome.json')} autoPlay loop />
//                 </View>
//                 <View style={{ flex: 1, marginHorizontal: 22, position: "relative", top: 250 }}>
//                     <View style={{ marginBottom: 12 }}>
//                         <Text style={{
//                             fontSize: 16,
//                             fontWeight: 400,
//                             marginVertical: 8
//                         }}>Matricule de l'étudiant</Text>

//                         <View style={{
//                             width: "100%",
//                             height: 48,
//                             borderColor: COLORS.bleu,
//                             borderWidth: 2,
//                             borderRadius: 8,
//                             alignItems: "center",
//                             justifyContent: "center",
//                             paddingLeft: 22,
//                         }}>
//                             <TextInput
//                                 placeholder='Entrez votre matricule'
//                                 placeholderTextColor={COLORS.black}
//                                 keyboardType='email-address'
//                                 style={{
//                                     width: "100%"
//                                 }}
//                                 value={matricule}
//                                 onChangeText={setMatricule}
//                             />
//                         </View>
//                     </View>

//                     <View style={{ marginBottom: 12 }}>
//                         <Text style={{
//                             fontSize: 16,
//                             fontWeight: 400,
//                             marginVertical: 8,
//                         }}>Code parent</Text>

//                         <View style={{
//                             width: "100%",
//                             height: 48,
//                             borderColor: COLORS.bleu,
//                             borderWidth: 2,
//                             borderRadius: 8,
//                             alignItems: "center",
//                             justifyContent: "center",
//                             paddingLeft: 22
//                         }}>
//                             <TextInput
//                                 placeholder='Entrez votre mot de passe'
//                                 placeholderTextColor={COLORS.black}
//                                 secureTextEntry={isPasswordShown}
//                                 style={{
//                                     width: "100%"
//                                 }}
//                                 value={password}
//                                 onChangeText={setPassword}
//                             />

//                             <TouchableOpacity
//                                 onPress={() => setIsPasswordShown(!isPasswordShown)}
//                                 style={{
//                                     position: "absolute",
//                                     right: 12
//                                 }}
//                             >
//                                 {
//                                     isPasswordShown == true ? (
//                                         <Ionicons name="eye-off" size={24} color={COLORS.black} />
//                                     ) : (
//                                         <Ionicons name="eye" size={24} color={COLORS.black} />
//                                     )
//                                 }

//                             </TouchableOpacity>
//                         </View>
//                     </View>


//                     <TouchableOpacity
//                         style={{
//                             marginTop: 18,
//                             marginBottom: 4,
//                             backgroundColor: COLORS.bleu,
//                             borderRadius: 10,
//                             height: 50,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             flexDirection: 'row',
//                             opacity: isLoading ? 0.5 : 1,
//                         }}
//                         disabled={isLoading}
//                         onPress={handleLoginParent}
//                     >
//                         {isLoading ? (
//                             <ActivityIndicator size="small" color={COLORS.white} style={{ marginRight: 10 }} />
//                         ) : (
//                             <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Se connecter</Text>
//                         )}
//                     </TouchableOpacity>
//                     <View style={{
//                         flexDirection: "row",
//                         justifyContent: "center",
//                         marginVertical: 22
//                     }}>
//                         <Text style={{ fontSize: 16, color: COLORS.black }}>Vous êtes étudiants ? </Text>
//                         <Pressable
//                             onPress={() => navigation.navigate("Etudiants")}
//                         >
//                             <Text style={{
//                                 fontSize: 16,
//                                 color: COLORS.bleu,
//                                 fontWeight: "bold",
//                                 marginLeft: 6
//                             }}>Étudiant</Text>
//                         </Pressable>
//                     </View>
//                 </View>
//             </SafeAreaView>
//         </AlertNotificationRoot>
//     )
// }

// export default ParentLogin;

import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import COLORS from '../../../constants/colors';
import axios from 'axios'
import { backendUrl } from '../../../api-server.config';

const ParentLogin = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [matricule, setMatricule] = useState('');
    const [password, setPassword] = useState('');

    const handleButtonPress = async () => {
        console.log(matricule)
        console.log(password)
        try {
            setIsLoading(true);
            const response = await axios.post(`${backendUrl}/authParent`,{ username: matricule, password });
            console.log(response)
            

            if (response.success) {
                navigation.navigate("Parent");
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <View style={styles.container}>
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
                        Connexion parent
                    </Animated.Text>
                </View>

                <View style={{ display: "flex", alignItems: "center", marginHorizontal: 5, gap: 4 }}>
                    <Animated.View
                        entering={FadeInDown.duration(1000).springify()}
                        style={{ backgroundColor: COLORS.grey, padding: 10, borderRadius: 5, width: "100%" }}
                    >
                        <TextInput
                            placeholder="Identifiant parent"
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
                            placeholder="Mot de passe"
                            placeholderTextColor={COLORS.bleu}
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
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
                            onPress={handleButtonPress}
                        >
                            {isLoading ? (
                                <ActivityIndicator size="small" color={COLORS.white} style={{ marginRight: 10 }} />
                            ) : (
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Se connecter</Text>
                            )}
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </View >
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

export default ParentLogin;