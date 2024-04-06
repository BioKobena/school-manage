import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from './Welcome';
import StudentLogin from '../components/students/Auth/StudentLogin'
import ParentLogin from '../components/parents/Auth/ParentLogin';
import Choose from './Choose';
import ParentNavigation from './ParentNavigation';
import StudentNavigation from './StudentNavigation';

const Stack = createNativeStackNavigator();

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
                    name="ParentNav"
                    component={ParentNavigation}
                    options={{
                        headerShown: false
                    }}
                />


                <Stack.Screen
                    name="ParentLogin"
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
                    name="EtudiantHome"
                    component={StudentNavigation}
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