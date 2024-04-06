import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../constants/colors';
import StudentScreen from './StudentScreen';
import NotificationsScreen from '../components/notifications/Notifications';


const Tab = createMaterialBottomTabNavigator();

const StudentNavigation = ({ route }) => {

    // console.log(route)

    return (
        <Tab.Navigator
            activeColor={COLORS.white}
            inactiveColor={COLORS.blueLight}
            activeIndicatorStyle={{ backgroundColor: "transparent" }}
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
                initialParams={{ studentData: route.params.studentId }} // Passer les données de l'étudiant comme paramètre initial
                component={StudentScreen}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
                name="Notifications"
                component={NotificationsScreen}
            />

        </Tab.Navigator>
    );
}

export default StudentNavigation;
