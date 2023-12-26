import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const ParentView = () => {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    flexWrap: "wrap",
                    color: "#fff",
                    textAlign:"center",
                    position:"absolute",
                    top:"20%",
                    left:"8%",
                    backgroundColor:"#043b5c",
                    padding:15,
                    borderRadius:5
                }}
            >Bienvenue sur la page parent</Text>
            <SafeAreaView
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    marginTop:25
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
                        >Kedma Goze</Text>
                        <Text
                            style={{
                                fontSize: 19,
                                color: "#1c474d",
                                flexWrap: "wrap",
                                zIndex: 1000,
                                fontWeight: "700"

                            }}
                        >Étudiante en Science Éco</Text>
                        <Text
                            style={{
                                fontSize: 16,
                                color: "#111",
                                flexWrap: "wrap",
                                fontWeight: "600"
                            }}
                        >Licence 1</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#eff5f7",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})
export default ParentView