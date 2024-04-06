import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Student from '../components/students/Student';
// import StudentLogin from '../components/StudentLogin';
import Timetable from '../components/students/Menu/Timetable';
import Card from '../components/students/Menu/Card';
import Schooling from '../components/students/Menu/Schooling';
import Maquette from '../components/students/Menu/Maquette';
import Profile from '../components/students/Menu/Profile';
import Library from '../components/students/Menu/Library';
import Marks from '../components/students/Menu/Marks';
import Group from '../components/students/Menu/Group';
import Documents from '../components/students/Menu/Documents';
import Access from '../components/students/Menu/Access';
import Curriculum from '../components/students/Menu/Curriculum';
import Transport from '../components/students/Menu/Transport';
import Course from '../components/students/Menu/Course';
import COLORS from '../constants/colors';


const StudentStack = createStackNavigator();

const StudentScreen = ({ route }) => {
    const { studentData } = route.params;
    // console.log("Ce sont les données du grand StudentScreen",studentData)
    // console.log(studentData)
    return (
        <StudentStack.Navigator initialRouteName="Etudiant">
            <StudentStack.Screen
                name="Etudiant"
                component={Student}
                initialParams={{ studentData: studentData }}
                options={{
                    headerShown: false,
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
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
                initialParams={{ studentData: studentData }}
            />
            <StudentStack.Screen
                name="Card"
                component={Card}
                initialParams={{ studentData: studentData }}
                options={{
                    title: 'Ma carte',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
            <StudentStack.Screen
                name="Schooling"
                component={Schooling}
                options={{
                    title: 'Scolarité',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
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
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
            <StudentStack.Screen
                name="Profil"
                component={Profile}
                options={{
                    title: 'Profil',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
            <StudentStack.Screen
                name="Library"
                component={Library}
                options={{
                    title: 'Bibliothèque',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
            <StudentStack.Screen
                name="Marks"
                component={Marks}
                options={{
                    title: 'Notes et évaluations',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
            <StudentStack.Screen
                name="Group"
                component={Group}
                options={{
                    title: 'Groupe',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
            <StudentStack.Screen
                name="Documents"
                component={Documents}
                options={{
                    title: 'Documents',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
            <StudentStack.Screen
                name="Access"
                component={Access}
                options={{
                    title: 'Accès',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
            <StudentStack.Screen
                name="Curriculum"
                component={Curriculum}
                options={{ title: 'Curriculum Vitae' }}
            />
            <StudentStack.Screen
                name="Transport"
                component={Transport}
                options={{
                    title: 'Transports & Cars',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
            <StudentStack.Screen
                name="Cours"
                component={Course}
                options={{
                    title: 'Cours',
                    headerStyle: {
                        backgroundColor: COLORS.bleu,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Poppins SemiBold',
                    },
                }}
            />
        </StudentStack.Navigator>
    );
};

export default StudentScreen;
