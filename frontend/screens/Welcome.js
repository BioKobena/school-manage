import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/hero1.jpg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 20,
                            transform: [
                                { translateX: 30 },
                                { translateY: 30 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/hero2.jpg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 160,
                            left: 100,
                            transform: [
                                { translateX: 100 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Bienvenue </Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>sur Yehkla</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 20,
                            color: COLORS.white,
                            marginVertical: 9,
                        }}>Pour être en contact avec votre établissement.</Text>
                        <Text style={{
                            fontSize: 21,
                            color: COLORS.white,
                        }}>Vos informations sécurisés et à porter de main.</Text>
                    </View>

                    <Button
                        title="Suivant"
                        onPress={() => navigation.navigate("Home")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome