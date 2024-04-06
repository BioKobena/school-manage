import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import COLORS from '../../constants/colors';


const Tab = createMaterialTopTabNavigator();

const NotificationsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Nouvelles Notifications"
        component={NewNotificationsScreen}
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
      <Tab.Screen
        name="Historique des Notifications"
        component={HistoryNotificationsScreen}
        options={{
         
        }}
      />
    </Tab.Navigator>
  );
};

const NewNotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <NotificationItem
        icon="megaphone"
        color="#e74c3c"
        text="Annonce importante : Nouveau calendrier scolaire disponible."
      />
    </View>
  );
};

const HistoryNotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <NotificationItem
        icon="checkmark-circle"
        color="#2ecc71"
        text="Votre devoir a été corrigé avec succès."
      />
      <NotificationItem
        icon="mail"
        color="#3498db"
        text="Nouveau message de votre professeur."
      />
      {/* Ajoutez d'autres notifications historiques ici */}
    </View>
  );
};

const NotificationItem = ({ icon, color, text }) => {
  return (
    <View style={styles.notificationItem}>
      <Ionicons name={icon} size={36} color={color} />
      <Text style={styles.notificationText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  notificationText: {
    marginLeft: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default NotificationsScreen;
