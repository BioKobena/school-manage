import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const data = [
  { id: '1', subject: 'Mathématiques', evaluations: [
    { type: 'Interro 1', score: 15 },
    { type: 'Interro 2', score: 12 },
    { type: 'Interro 3', score: 18 },
    { type: 'Devoir 1', score: 16 },
    { type: 'Devoir 2', score: 14 },
    { type: 'Kholle', score: 18 },
  ] },
  { id: '2', subject: 'Physique', evaluations: [
    { type: 'Interro 1', score: 14 },
    { type: 'Interro 2', score: 13 },
    { type: 'Interro 3', score: 16 },
    { type: 'Devoir 1', score: 15 },
    { type: 'Devoir 2', score: 14 },
    { type: 'Kholle', score: 16 },
  ] },
  { id: '2', subject: 'Physique', evaluations: [
    { type: 'Interro 1', score: 14 },
    { type: 'Interro 2', score: 13 },
    { type: 'Interro 3', score: 16 },
    { type: 'Devoir 1', score: 15 },
    { type: 'Devoir 2', score: 14 },
    { type: 'Kholle', score: 16 },
  ] },
  // Ajoutez d'autres matières avec leurs évaluations
];

const Marks = ({route}) => {
  console.log(route.params.studentInfo)
  const renderMarkItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.subject}>{item.subject}</Text>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#3498db' }}>
        <Row
          data={['Evaluation', 'Note']}
          style={styles.head}
          textStyle={styles.headText}
        />
        <Rows
          data={item.evaluations.map(evaluation => [evaluation.type, evaluation.score.toString()])}
          textStyle={styles.rowText}
        />
      </Table>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      {data.map((item) => (
        <View key={item.id}>
          {renderMarkItem({ item })}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#3498db',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  subject: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 8,
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { margin: 6, textAlign: 'center', fontWeight: 'bold' },
  rowText: { margin: 6, textAlign: 'center' },
});

export default Marks;
