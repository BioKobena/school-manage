import * as React from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Notifications from '../components/notifications/Notifications';
import Welcome from './Welcome';
import Student from '../components/students/Student';
import StudentLogin from '../components/students/Auth/StudentLogin'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ParentLogin from '../components/parents/ParentLogin';
import ParentView from '../components/parents/ParentView';
import Timetable from '../components/students/Menu/Timetable';
import Card from '../components/students/Menu/Card';
import Profile from '../components/students/Menu/Profile';
import Schooling from '../components/students/Menu/Schooling';
import Maquette from '../components/students/Menu/Maquette';
import Library from '../components/students/Menu/Library';
import Marks from '../components/students/Menu/Marks';
import Group from '../components/students/Menu/Group';
import Disconnect from '../components/students/Menu/Disconnect';
import Documents from '../components/students/Menu/Documents';
import Access from '../components/students/Menu/Access';
import Curriculum from '../components/students/Menu/Curriculum';
import Transport from '../components/students/Menu/Transport';
import Course from '../components/students/Menu/Course';
import COLORS from '../constants/colors';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const StudentStack = createNativeStackNavigator()
const ParentStack = createNativeStackNavigator()
const NotificationStack = createNativeStackNavigator()

const ParentScreen = () => {
    return (
        <ParentStack.Navigator initialRouteName='LoginParent'>
            <ParentStack.Screen
                name="LoginParent"
                component={ParentLogin}
                options={{
                    headerShown: false
                }}
            />
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
    return (
        <NotificationStack.Navigator initialRouteName='Notifications'>
            <NotificationStack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackVisible:false,
                    headerTitleAlign:"center"
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
                    headerShown: false
                }}
            />
            {/* <ParentStack.Screen
                name="Parents"
                component={ParentScreen}
                options={{
                    headerShown: false
                }}
            /> */}
        </ParentStack.Navigator>
    );
}

const StudentScreen = () => {
    return (
        <StudentStack.Navigator initialRouteName='Login'>
            <StudentStack.Screen
                name="Etudiants"
                component={Student}
                options={{
                    headerShown: false
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
                }}
            />
            <StudentStack.Screen
                name="Card"
                component={Card}
                options={{
                    title: "Carte"
                }}
            />
            <StudentStack.Screen
                name="Schooling"
                component={Schooling}
                options={{
                    title: "Scolarité"
                }}
            />
            <StudentStack.Screen
                name="Maquette"
                component={Maquette}
                options={{
                    title: "Maquette pédagogique"
                }}
            />
            <StudentStack.Screen
                name="Profil"
                component={Profile}
                options={{
                    title: "Profil"
                }}
            />
            <StudentStack.Screen
                name="Library"
                component={Library}
                options={{
                    title: "Bibliothèque"
                }}
            />
            <StudentStack.Screen
                name="Marks"
                component={Marks}
                options={{
                    title: "Notes et évaluations",
                }}
            />
            <StudentStack.Screen
                name="Group"
                component={Group}
                options={{
                    title: "Groupe"
                }}
            />
            <StudentStack.Screen
                name="Documents"
                component={Documents}
                options={{
                    title: "Documents"
                }}
            />
            <StudentStack.Screen
                name="Access"
                component={Access}
                options={{
                    title: "Accès"
                }}
            />
            <StudentStack.Screen
                name="Curriculum"
                component={Curriculum}
                options={{
                    title: "Curriculum Vitae"
                }}
            />
            <StudentStack.Screen
                name="Transport"
                component={Transport}
                options={{
                    title: "Transports & Cars"
                }}
            />
            <StudentStack.Screen
                name="Cours"
                component={Course}
                options={{
                    title: "Cours"
                }}
            />
        </StudentStack.Navigator>
    )
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
            {/* <HomeStack.Screen name="Details" component={StudentElementScreen} /> */}
        </HomeStack.Navigator>
    );
}

const HomeScreen = () => {
    return (
        <Tab.Navigator
            activeColor="#fff"
            inactiveColor="rgb(205, 209, 200)"
            barStyle={{ backgroundColor: COLORS.primary, paddingBottom: 4 }}
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

function Nav() {
    return (
        <NavigationContainer>
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
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});




export default Nav;