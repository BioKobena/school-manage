import * as React from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Notifications from '../components/notifications/Notifications';
import Welcome from './Welcome';
import Student from '../components/students/Student';
import StudentLogin from '../components/students/Auth/StudentLogin'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ParentLogin from '../components/parents/Auth/ParentLogin';
import ParentView from '../components/parents/ParentView';
import Timetable from '../components/students/Menu/Timetable';
import Card from '../components/students/Menu/Card';
import Profile from '../components/students/Menu/Profile';
import Schooling from '../components/students/Menu/Schooling';
import Maquette from '../components/students/Menu/Maquette';
import Library from '../components/students/Menu/Library';
import Marks from '../components/students/Menu/Marks';
import Group from '../components/students/Menu/Group';
import Documents from '../components/students/Menu/Documents';
import Access from '../components/students/Menu/Access';
import Curriculum from '../components/students/Menu/Curriculum';
import Transport from '../components/students/Menu/Transport';
import Course from '../components/students/Menu/Course';
import COLORS from '../constants/colors';
import Choose from './Choose';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const StudentStack = createNativeStackNavigator()
const ParentStack = createNativeStackNavigator()
const NotificationStack = createNativeStackNavigator()


const ParentScreen = () => {
    return (
        <ParentStack.Navigator initialRouteName='ParentView'>
            <ParentStack.Screen
                name="ParentView"
                component={ParentView}
                options={{
                    headerShown: false
                }}
            />
        </ParentStack.Navigator>
    )
}

const NotificationScreen = () => {
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
    return (
        <NotificationStack.Navigator initialRouteName='Notifications'>
            <NotificationStack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.blueLogin,
                    },
                    headerTintColor: COLORS.white,
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold"
                    },
                    headerBackVisible: false,
                    headerTitleAlign: "center"
                }}
            />
        </NotificationStack.Navigator>
    )
}


function ParentStackScreen() {
    return (
        <ParentStack.Navigator>
            <ParentStack.Screen
                name="Parents"
                component={ParentScreen}
                options={{
                    headerShown: false,
                }}
            />

        </ParentStack.Navigator>
    );
}

const StudentScreen = () => {
    return (
        <StudentStack.Navigator initialRouteName='Etudiant'>
            <StudentStack.Screen
                name="Etudiant"
                component={Student}
                options={{
                    headerShown: false,
                }}
            />
            <StudentStack.Screen
                name="Login"
                component={StudentLogin}
                options={{
                    headerShown: false
                }}
            />
            <StudentStack.Screen
                name="Timetable"
                component={Timetable}
                options={{
                    title: 'Emploi du temps',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Card"
                component={Card}
                options={{
                    title: "Ma carte",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                    // headerBackImageSource: { uri: "https://cdn-icons-png.flaticon.com/128/130/130882.png", width: 25, height: 25 }
                }}
            />
            <StudentStack.Screen
                name="Schooling"
                component={Schooling}
                options={{
                    title: "Scolarité",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Maquette"
                component={Maquette}
                options={{
                    title: "Programme d'étude",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Profil"
                component={Profile}
                options={{
                    title: "Profil",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Library"
                component={Library}
                options={{
                    title: "Bibliothèque",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Marks"
                component={Marks}
                options={{
                    title: "Notes et évaluations",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Group"
                component={Group}
                options={{
                    title: "Groupe",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Documents"
                component={Documents}
                options={{
                    title: "Documents",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Access"
                component={Access}
                options={{
                    title: "Accès",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Curriculum"
                component={Curriculum}
                options={({ route }) => ({ title: 'Curriculum Vitae' })}
            />
            <StudentStack.Screen
                name="Transport"
                component={Transport}
                options={{
                    title: "Transports & Cars",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
            <StudentStack.Screen
                name="Cours"
                component={Course}
                options={{
                    title: "Cours",
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: "Poppins SemiBold",
                    },
                }}
            />
        </StudentStack.Navigator>
    )
}

const ParentNavigationScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName='Parents'
            activeColor={COLORS.blueLight}
            inactiveColor={COLORS.grey}
            barStyle={{ backgroundColor: COLORS.bleu, paddingBottom: 4 }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Parents',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-child-outline" color={color} size={26} />
                    ),
                }}
                name="Parents"
                component={ParentStackScreen} />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
                name="Notifications" component={NotificationScreen} />
        </Tab.Navigator>
    );
}


function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Etudiants"
                component={StudentScreen}
                options={{
                    headerShown: false
                }}
            />
        </HomeStack.Navigator>
    );
}


const StudentNavigationScreen = () => {
    return (
        <Tab.Navigator
            activeColor={COLORS.blueLight}
            inactiveColor={COLORS.grey}
            barStyle={{ backgroundColor: COLORS.bleu, paddingBottom: 4 }}
            initialRouteName='Etudiants'
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Etudiants',

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="clipboard-account" color={color} size={26} />
                    ),
                }}
                name="Etudiants"
                component={HomeStackScreen}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
                name="Notifications" component={NotificationScreen} />
        </Tab.Navigator>
    );
}


const Navigation = () => {
    return (
        <NavigationContainer fallback={<ActivityIndicator animation />}>
            <Stack.Navigator
                initialRouteName='Welcome'
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Etudiants"
                    component={StudentNavigationScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Parent"
                    component={ParentNavigationScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="LoginParent"
                    component={ParentLogin}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={StudentLogin}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Choose"
                    component={Choose}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation