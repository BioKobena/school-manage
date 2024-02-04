import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Documents = () => {
  const documents = [
    { id: '1', title: 'Document 1', description: 'Description du document 1.' },
    { id: '2', title: 'Document 2', description: 'Description du document 2.' },
    { id: '3', title: 'Document 3', description: 'Description du document 3.' },
  ];

  const renderDocumentItem = ({ item }) => (
    <TouchableOpacity style={styles.documentItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Documents</Text>
      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={renderDocumentItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  documentItem: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3498db',
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default Documents;
