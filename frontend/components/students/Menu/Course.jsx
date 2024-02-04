import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Course = () => {
  const navigation = useNavigation();

  const handleCoursePress = (courseTitle) => {
    // Vous pouvez passer des paramètres supplémentaires ici si nécessaire
    navigation.navigate('CourseDetails', { courseTitle });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Cours</Text>

      <TouchableOpacity onPress={() => handleCoursePress('Mathématiques')} style={styles.courseContainer}>
        <Text style={styles.courseTitle}>Mathématiques</Text>
        <Text style={styles.courseDescription}>Cours avancé de mathématiques pour les étudiants en informatique.</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCoursePress('Programmation Java')} style={styles.courseContainer}>
        <Text style={styles.courseTitle}>Programmation Java</Text>
        <Text style={styles.courseDescription}>Introduction à la programmation Java avec des exemples pratiques.</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCoursePress('Base de données')} style={styles.courseContainer}>
        <Text style={styles.courseTitle}>Base de données</Text>
        <Text style={styles.courseDescription}>Principes fondamentaux des bases de données et langage SQL.</Text>
      </TouchableOpacity>

      {/* Ajoutez d'autres cours selon vos besoins */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  courseContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3498db',
  },
  courseDescription: {
    fontSize: 16,
    color: '#555',
  },
});

export default Course;
