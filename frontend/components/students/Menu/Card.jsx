import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const backendUrl = "http://192.168.1.83:3000"
const Card = ({ route }) => {
  const { studentId } = route.params;
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(`${backendUrl}/students/${studentId}`);
        setStudentInfo(response.data.student);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'étudiant:', error);
      }
    };
    fetchStudentInfo();
  }, [studentId]);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://img.freepik.com/photos-gratuite/souriante-jeune-etudiante-afro-americaine-sac-dos-tenant-livres_141793-123010.jpg?size=626&ext=jpg&ga=GA1.2.243878169.1698685310&semt=ais' }}
        style={styles.image}
      />
      {/* <Text style={styles.title}>Informations de l'étudiant</Text> */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nom:</Text>
        <Text style={styles.value}>{studentInfo ? studentInfo.nom : ''}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Prénoms:</Text>
        <Text style={styles.value}>{studentInfo ? studentInfo.prenoms : ''}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Sexe:</Text>
        <Text style={styles.value}>{studentInfo ? studentInfo.sexe : ''}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{studentInfo ? studentInfo.email : ''}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Filière:</Text>
        <Text style={styles.value}>{studentInfo ? studentInfo.filiere : ''}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Date de naissance:</Text>
        <Text style={styles.value}>{studentInfo ? studentInfo.dateNaissPersonne : ''}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Matricule:</Text>
        <Text style={styles.value}>{studentInfo ? studentInfo.matricule : ''}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    color: '#555',
    fontSize: 16,
  },
  value: {
    flex: 2,
    color: '#333',
    fontSize: 16,
  },
});

export default Card;
