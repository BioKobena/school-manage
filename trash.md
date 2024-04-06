    {/* 
      <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.blueLight, COLORS.bleu]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Animated.View
                        entering={FadeInDown.delay(400).duration(5000).springify()}
                    >
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
                    </Animated.View>
                    <Animated.View
                        entering={FadeInDown.delay(400).duration(5000).springify()}
                    >
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
                                    { translateX: 10 },
                                    { translateY: 50 },
                                    { rotate: "-5deg" }
                                ]
                            }}
                        />

                    </Animated.View>
                    <Animated.View
                        entering={FadeInDown.delay(400).duration(5000).springify()}
                    >
                        <Image
                            source={require("../assets/ipif.png")}
                            style={{
                                height: 150,
                                width: 150,
                                borderRadius: 20,
                                position: "absolute",
                                top: 160,
                                left: 100,
                                transform: [
                                    { translateX: 150 },
                                    { translateY: -50 },
                                    { rotate: "-5deg" }
                                ]
                            }}
                        />
                    </Animated.View>

                </View>



                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%",
                }}>
                    <Animated.View
                        entering={FadeInDown.delay(400).duration(5000).springify()}
                    >
                        <Text style={{
                            fontSize: 50,
                            fontWeight: 800,
                            color: COLORS.white,

                        }}>Bienvenue </Text>
                        <Text style={{
                            fontSize: 46,
                            fontWeight: 800,
                            color: COLORS.white
                        }}>sur IPIF</Text>

                        <View style={{ marginVertical: 22 }}>
                            <Text style={{
                                fontSize: 20,
                                color: COLORS.white,
                                marginVertical: 9,
                                fontFamily: "Poppins Regular"
                            }}>Pour être en contact avec votre établissement.</Text>
                            <Text style={{
                                fontSize: 21,
                                color: COLORS.white,
                                fontFamily: "Poppins Regular"
                            }}>Vos informations sécurisés et à porter de main.</Text>
                        </View>
                    </Animated.View>
                    <Button
                        title={"Chargement"}
                        onPress={handleWelcome}
                        disabled={isLoading}

                        style={{
                            marginTop: 20,
                            width: "100%",
                            border: "none",
                            fontFamily: "Poppins Black",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    />
                    {isLoading && (
                            <ActivityIndicator size="small" color={COLORS.white} style={{ marginLeft: -35 }} />
                        )}
                    </Button>
                </View>
            </View> */}