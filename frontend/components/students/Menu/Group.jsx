import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [
  { id: '1', name: 'John Doe', phoneNumber: '123-456-7890', group: 'Groupe A' },
  { id: '2', name: 'Jane Doe', phoneNumber: '987-654-3210', group: 'Groupe A' },
  { id: '3', name: 'Bob Smith', phoneNumber: '555-123-4567', group: 'Groupe A' },
  { id: '4', name: 'Alice Johnson', phoneNumber: '333-999-8888', group: 'Groupe A' },
  { id: '5', name: 'Charlie Brown', phoneNumber: '777-222-1111', group: 'Groupe A' },
  { id: '6', name: 'David Williams', phoneNumber: '444-666-3333', group: 'Groupe A' },
  { id: '7', name: 'Eva Davis', phoneNumber: '111-777-5555', group: 'Groupe A' },
  { id: '8', name: 'Frank Miller', phoneNumber: '999-333-2222', group: 'Groupe A' },
  { id: '9', name: 'Grace Taylor', phoneNumber: '666-444-1111', group: 'Groupe A' },
  { id: '10', name: 'Henry Wilson', phoneNumber: '222-555-9999', group: 'Groupe A' },
  { id: '11', name: 'Ivy Clark', phoneNumber: '888-111-7777', group: 'Groupe A' },
  { id: '12', name: 'Jack Harris', phoneNumber: '777-222-3333', group: 'Groupe A' },
  { id: '13', name: 'Kate Robinson', phoneNumber: '111-333-5555', group: 'Groupe A' },
  { id: '14', name: 'Liam Lee', phoneNumber: '444-999-6666', group: 'Groupe A' },
  { id: '15', name: 'Mia Scott', phoneNumber: '555-666-2222', group: 'Groupe A' },
];

const Group = () => {
  const groupedPeople = data.reduce((acc, person) => {
    if (!acc[person.group]) {
      acc[person.group] = [];
    }
    acc[person.group].push(person);
    return acc;
  }, {});

  const renderPersonItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.name}</Text>
      <Text style={styles.tableCell}>{item.phoneNumber}</Text>
    </View>
  );

  const renderGroupItem = ({ item }) => (
    <View style={styles.groupContainer}>
      <Text style={styles.groupTitle}>{item.group}</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Nom</Text>
          <Text style={styles.tableHeaderCell}>Numéro de téléphone</Text>
        </View>
        <FlatList
          data={groupedPeople[item.group]}
          keyExtractor={(person) => person.id}
          renderItem={renderPersonItem}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Groupe de classes</Text>
      <Text style={{textAlign:"center", fontSize:17}}>Vous êtes membres du groupe : </Text>
      <FlatList
        data={Object.keys(groupedPeople).map((group) => ({ group, key: group }))}
        keyExtractor={(item) => item.group}
        renderItem={renderGroupItem}
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
  groupContainer: {
    marginBottom: 24,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3498db',
  },
  table: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    backgroundColor: '#3498db',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeaderCell: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    padding: 8,
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#3498db',
  },
  tableCell: {
    fontSize: 16,
    padding: 8,
    color: '#555',
    flex: 1,
    textAlign: 'center',
  },
});

export default Group;
