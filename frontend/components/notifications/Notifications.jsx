import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Assurez-vous d'installer cette bibliothèque

const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.notificationItem}>
        <Ionicons name="notifications" size={24} color="#007bff" />
        <Text style={styles.notificationText}>Nouvelle notification : Votre devoir a été corrigé.</Text>
      </View>
      <View style={styles.notificationItem}>
        <Ionicons name="notifications" size={24} color="#007bff" />
        <Text style={styles.notificationText}>Nouveau message : Vous avez un message de votre professeur.</Text>
      </View>
      {/* Ajoutez d'autres notifications avec des icônes ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#e0e0e0', 
    borderRadius: 8, 
    padding: 10, 
  },
  notificationText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000', 
  },
});

export default Notifications;