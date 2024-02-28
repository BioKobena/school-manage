import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const installments = [
  { id: '1', amount: 500, dueDate: '2024-02-05', paid: true },
  { id: '2', amount: 500, dueDate: '2024-03-05', paid: true },
  { id: '3', amount: 500, dueDate: '2024-04-05', paid: false },
  { id: '4', amount: 500, dueDate: '2024-05-05', paid: false },
];

const Schooling = () => {
  const renderInstallmentItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.installmentText}>{`Échéance ${item.id}`}</Text>
        <Text style={styles.installmentAmount}>{`Montant: ${item.amount} FCFA`}</Text>
        <Text style={styles.dueDate}>{`Échéance le ${item.dueDate}`}</Text>
      </View>
      <Icon
        name={item.paid ? 'check' : 'times'}
        size={24}
        color={item.paid ? '#4CAF50' : '#FF5252'}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suivi de scolarité</Text>
      <FlatList
        data={installments}
        keyExtractor={(item) => item.id}
        renderItem={renderInstallmentItem}
      />
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
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
  },
  installmentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  installmentAmount: {
    fontSize: 16,
    color: '#555',
  },
  dueDate: {
    fontSize: 14,
    color: '#777',
  },
});

export default Schooling;
