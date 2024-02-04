import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';

const backendUrl = "http://192.168.1.83:3000"

const ParentView = ({ route }) => {
  const { parentInfo } = route.params;
  const etudiantInfo = parentInfo.etudiants[0];
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(`${backendUrl}/students/${etudiantInfo.id}`);
        setStudentInfo(response.data.student);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'étudiant:', error);
      }
    };
    fetchStudentInfo();
  }, [etudiantInfo.id]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://img.freepik.com/photos-gratuite/souriante-jeune-etudiante-afro-americaine-sac-dos-tenant-livres_141793-123010.jpg?size=626&ext=jpg&ga=GA1.2.243878169.1698685310&semt=ais' }}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.title}>Votre profil</Text>
        {studentInfo && (
          <>
            {renderInfo('Nom', studentInfo.nom)}
            {renderInfo('Prénoms', studentInfo.prenoms)}
            {renderInfo('Sexe', studentInfo.sexe)}
            {renderInfo('Email', studentInfo.email)}
            {renderInfo('Lieu de naissance', studentInfo.lieuNaissance)}
            {renderInfo('Filière', studentInfo.filiere)}
            {renderInfo('Date de naissance', studentInfo.dateNaissPersonne)}
            {renderInfo('Serie du BAC', studentInfo.serieBAC)}
            {renderInfo('Contact', studentInfo.contact)}
            {renderInfo('Matricule', studentInfo.matricule)}
            {renderInfo('Mot de passe', studentInfo.motDePasse)}
          </>
        )}
      </View>
    </ScrollView>
  );
};

const renderInfo = (label, value) => (
  <View style={styles.infoContainer} key={label}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    width:'100%'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 16,
    padding: 26,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 350,
    // borderRadius: 50,
    marginBottom: -15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign:'center'
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
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

export default ParentView;
