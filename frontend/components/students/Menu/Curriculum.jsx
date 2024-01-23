import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'

const Curriculum = ({ route }) => {
  const { studentId } = route.params;
  console.log(studentId)
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(`http://192.168.1.83:3000/students/${studentId}`);
        console.log(response.data.student);
        setStudentInfo(response.data.student);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'étudiant:', error);
      }
    };
    fetchStudentInfo();
  }, [studentId]);

  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Card.Content>
          <Title>Curriculum Vitae</Title>
        </Card.Content>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <Card.Content>
          <Title>Informations personnelles</Title>
          <Paragraph>Nom & Prénoms : {studentInfo ? `${studentInfo.nom} ${studentInfo.prenoms}` : ''}</Paragraph>
          <Paragraph> Lieu de résidence : {studentInfo ? `${studentInfo.lieuResidence}` : ''}</Paragraph>
          <Paragraph>Téléphone: {studentInfo ? `${studentInfo.contact}` : ''}</Paragraph>
          <Paragraph>Email: {studentInfo ? `${studentInfo.email}` : ''}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <Card.Content>
          <Title>Expérience professionnelle</Title>
          <Paragraph>Poste: Développeur Web</Paragraph>
          <Paragraph>Entreprise: ABC Company</Paragraph>
          <Paragraph>Période: Janvier 2020 - Présent</Paragraph>
          <Paragraph>Description des responsabilités et réalisations.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <Card.Content>
          <Title>Éducation</Title>
          <Paragraph>Diplôme: Baccalauréat en Informatique</Paragraph>
          <Paragraph>École: XYZ University</Paragraph>
          <Paragraph>Période: Septembre 2016 - Mai 2020</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Curriculum;
