import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ParentLogin from '../components/parents/Auth/ParentLogin';
import ParentView from '../components/parents/ParentView';
import COLORS from '../constants/colors';
import NotificationParentScreen from '../components/notifications/NotificationParent';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { backendUrl } from '../api-server.config';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ParentNavigation = ({ route }) => {
    const navigation = useNavigation();
    console.log(route.params.students)
    const students = route.params.students
    const { loginSuccess } = route.params; // Récupérer les paramètres envoyés depuis ParentLogin
    const [studentData, setStudentData] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
        const fetchStudentData = async () => {
            try {
                // Vérifier si students est défini avant de récupérer les données de l'étudiant
                if (loginSuccess && students) {
                    // Vous devez utiliser les informations reçues depuis ParentLogin pour récupérer les données de l'étudiant associé
                    // Par exemple, vous pouvez envoyer une requête au backend pour récupérer les données de l'étudiant en fonction du parent
                    // Ici, j'utilise les données reçues depuis ParentLogin directement comme exemple
                    setStudentData(students); // Remplacer students par les données réelles de l'étudiant obtenues depuis le backend
                }
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'étudiant :', error);
                setLoading(false);
            }
        };

        fetchStudentData();
    }, [loginSuccess, students]);
    if (loading) {
        return <ActivityIndicator size="large" color={COLORS.blue} />;
    }

    return (
        <Tab.Navigator
            initialRouteName="ParentView"
            activeColor={COLORS.white}
            inactiveColor={COLORS.blueLight}
            activeIndicatorStyle={{ backgroundColor: "transparent" }}
            barStyle={{ backgroundColor: COLORS.bleu, paddingBottom: 4 }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Parents',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-child-outline" color={color} size={26} />
                    ),
                }}
                name="ParentView"
                initialParams={{ studentData: studentData }} 
                component={ParentView}
            />
            <Tab.Screen
                options={({ route }) => ({
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                    tabBarOptions:{
                        tabBarStyle: { marginTop: 20 }, // Ajoutez une marge en haut des onglets
                      }
                })}
        
                name="Notifications" component={NotificationParentScreen} />
        </Tab.Navigator>
    );
};

export default ParentNavigation;
