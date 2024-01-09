import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Course = () => {
  // Exemple de données de cours directement dans le composant
  const courses = [
    {
      title: 'Mathématiques',
      professor: 'M. Dupont',
      room: 'Salle 101',
      day: 'Lundi',
      time: '9:00 - 10:30',
    },
    {
      title: 'Français',
      professor: 'Mme. Martin',
      room: 'Salle 203',
      day: 'Mercredi',
      time: '11:00 - 12:30',
    },
    // Ajoutez d'autres cours ici
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cours de l'étudiant :</Text>
      {courses.map((course, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#555" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.courseDetails}>Professeur: {course.professor}</Text>
            <Text style={styles.courseDetails}>Salle: {course.room}</Text>
            <Text style={styles.courseDetails}>Jour: {course.day}</Text>
            <Text style={styles.courseDetails}>Heure: {course.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardContent: {},
  courseDetails: {
    fontSize: 14,
    marginBottom: 3,
    color: '#555',
  },
});

export default Course;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// // Données fictives pour le tableau
// const sampleData = [
//   {
//     title: 'Mathématiques',
//     professor: 'M. Dupont',
//     room: 'Salle 101',
//     day: 'Lundi',
//     time: '9:00 - 10:30',
//   },
//   {
//     title: 'Français',
//     professor: 'Mme. Martin',
//     room: 'Salle 203',
//     day: 'Mercredi',
//     time: '11:00 - 12:30',
//   },
//   // Ajoutez d'autres cours ici
// ];

// const Course = ({ data = sampleData }) => {
//   return (
//     <View style={styles.table}>
//       <View style={styles.tableRow}>
//         <Text style={styles.tableHeader}>Cours</Text>
//         <Text style={styles.tableHeader}>Professeur</Text>
//         <Text style={styles.tableHeader}>Salle</Text>
//         <Text style={styles.tableHeader}>Jour</Text>
//         <Text style={styles.tableHeader}>Heure</Text>
//       </View>
//       {data.map((course, index) => (
//         <TouchableOpacity key={index} style={styles.tableRow}>
//           <Text style={styles.tableCell}>{course.title}</Text>
//           <Text style={styles.tableCell}>{course.professor}</Text>
//           <Text style={styles.tableCell}>{course.room}</Text>
//           <Text style={styles.tableCell}>{course.day}</Text>
//           <Text style={styles.tableCell}>{course.time}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   table: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     overflow: 'hidden',
//     marginVertical: 16,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//   },
//   tableHeader: {
//     flex: 1,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//   },
// });

// export default Course;

