import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { Dialog, ALERT_TYPE } from 'react-native-alert-notification';
import axios from 'axios';
import { backendUrl } from '../../api-server.config';

const ParentView = ({ route }) => {
  console.log(route.params.studentData)
  useEffect(() => {
    if (route.params && route.params.loginSuccess) {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Connexion réussie',
        textBody: 'Bienvenue sur la page parent.',
        button: 'Fermer',
      });
    }
  }, [route.params]);

  const parentInfo = route.params.studentData[0];
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(`${backendUrl}/students/${parentInfo.id}`);
        setStudentInfo(response.data.student);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'étudiant:', error);
      }
    };
    fetchStudentInfo();
  }, [parentInfo.id]);

  // Sample payment deadlines
  const paymentDeadlines = [
    { month: 'Septembre', amount: 50000 },
    { month: 'Décembre', amount: 60000 },
    { month: 'Février', amount: 0 },
    { month: 'Avril', amount: 0 },
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar status="light" />
      <Image
        source={{ uri: 'https://img.freepik.com/photos-gratuite/gros-plan-femme-souriante-dans-bibliotheque_23-2149204737.jpg?w=1800' }}
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Informations générales</Text>
        {studentInfo && (
          <>
            {renderInfo('Nom', studentInfo.nom)}
            {renderInfo('Prénoms', studentInfo.prenoms)}
            {renderInfo('Sexe', studentInfo.sexe)}
            {renderInfo('Email', studentInfo.email)}
            {renderInfo('Lieu de naissance', studentInfo.lieuNaissance)}
            {renderInfo('Filière', studentInfo.filiere)}
            {renderInfo('Classe', studentInfo.classe)}
            {renderInfo('Date de naissance', studentInfo.dateNaissPersonne)}
            {renderInfo('Serie du BAC', studentInfo.serieBAC)}
            {renderInfo('Contact', studentInfo.contact)}
            {renderInfo('Matricule', studentInfo.matricule)}
            {renderInfo('Mot de passe', studentInfo.motDePasse)}
          </>
        )}
      </View>

      <View style={styles.paymentCard}>
        <Text style={styles.title}>Échéances de paiements</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader]}>Échéances</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Montant (frs CFA)</Text>
          </View>
          {paymentDeadlines.map((deadline, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{deadline.month}</Text>
              <Text style={styles.tableCell}>{deadline.amount == 0 ? <Text style={{ color: "red" }}>Impayé</Text> : <Text style={{ color: "green" }}> {deadline.amount}</Text>}</Text>
            </View>
          ))}
        </View>
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
    width: '100%'
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
  paymentCard: {
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
    width: 100,
    height: 100,
    borderRadius: 60,
    marginTop: 50,
    marginLeft: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center'
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
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  tableCell: {
    flex: 1,
    padding: 10,
    // textAlign: 'center',
  },
});

export default ParentView;
