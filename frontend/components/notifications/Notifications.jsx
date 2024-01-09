import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assurez-vous que vous avez le package correspondant installé
import { AntDesign } from '@expo/vector-icons';

const Notifications = () => {
  return (
    <ScrollView>

      <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name="notification" size={24} color="#fff" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Nouvelle Notification</Text>
          <Text style={styles.message}>Un événement important est prévu pour ce vendredi.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name="notification" size={24} color="#fff" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Nouvelle Notification</Text>
          <Text style={styles.message}>Un événement important est prévu pour ce vendredi.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name="notification" size={24} color="#fff" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Nouvelle Notification</Text>
          <Text style={styles.message}>Un événement important est prévu pour ce vendredi.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name="notification" size={24} color="#fff" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Nouvelle Notification</Text>
          <Text style={styles.message}>Un événement important est prévu pour ce vendredi.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name="notification" size={24} color="#fff" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Nouvelle Notification</Text>
          <Text style={styles.message}>Un événement important est prévu pour ce vendredi.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name="notification" size={24} color="#fff" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Nouvelle Notification</Text>
          <Text style={styles.message}>Un événement important est prévu pour ce vendredi.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name="notification" size={24} color="#fff" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Nouvelle Notification</Text>
          <Text style={styles.message}>Un événement important est prévu pour ce vendredi.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name="notification" size={24} color="#fff" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Nouvelle Notification</Text>
          <Text style={styles.message}>Un événement important est prévu pour ce vendredi.</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#3498db', // Couleur de fond de la notification
    padding: 16,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#99D5F3', // Couleur de fond de l'icône
    borderRadius: 999, // Utilisez une valeur élevée pour obtenir un cercle
    padding: 10,
  },
  content: {
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  message: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Notifications;