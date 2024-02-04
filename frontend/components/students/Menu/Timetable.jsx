import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Timetable = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Emploi du temps</Title>

      {/* Jour 1 */}
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.dayContainer}>
            <Icon name="calendar" size={24} color="#3498db" style={styles.icon} />
            <Title style={styles.day}>Lundi</Title>
          </View>
          <Paragraph style={styles.activity}>Cours de Mathématiques</Paragraph>
          <Paragraph style={styles.activity}>Cours de Physique</Paragraph>
        </Card.Content>
      </Card>

      {/* Jour 2 */}
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.dayContainer}>
            <Icon name="calendar" size={24} color="#3498db" style={styles.icon} />
            <Title style={styles.day}>Mardi</Title>
          </View>
          <Paragraph style={styles.activity}>Cours de Français</Paragraph>
          <Paragraph style={styles.activity}>Cours d'Anglais</Paragraph>
        </Card.Content>
      </Card>

      {/* Ajoutez d'autres jours et activités selon votre besoin */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2c3e50',
  },
  card: {
    marginBottom: 16,
    elevation: 3,
    backgroundColor: '#ecf0f1',
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  day: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
  },
  activity: {
    fontSize: 16,
    color: '#34495e',
  },
});

export default Timetable;
