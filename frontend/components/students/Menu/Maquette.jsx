import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';

const Maquette = () => {
  // Exemple de données pour le tableau
  const maquettes = [
    { matiere: 'Mathématiques', coefficient: 4, items: 15, duree: '2h', professeur: 'M. Dupont' },
    { matiere: 'Mathématiques', coefficient: 4, items: 15, duree: '2h', professeur: 'M. Dupont' },
    { matiere: 'Mathématiques', coefficient: 4, items: 15, duree: '2h', professeur: 'M. Dupont' },
    { matiere: 'Mathématiques', coefficient: 4, items: 15, duree: '2h', professeur: 'M. Dupont' },
    { matiere: 'Mathématiques', coefficient: 4, items: 15, duree: '2h', professeur: 'M. Dupont' },
    { matiere: 'Mathématiques', coefficient: 4, items: 15, duree: '2h', professeur: 'M. Dupont' },
    { matiere: 'Mathématiques', coefficient: 4, items: 15, duree: '2h', professeur: 'M. Dupont' },
    { matiere: 'Mathématiques', coefficient: 4, items: 15, duree: '2h', professeur: 'M. Dupont' },
    { matiere: 'Mathématiques', coefficient: 4, items: 15, duree: '2h', professeur: 'M. Dupont' },
    // Ajoutez d'autres maquettes ici
  ];

  // Rendu des cellules horizontales
  const renderHorizontalCell = ({ item }) => (
    <View style={styles.horizontalCell}>
      <Text>{item.matiere}</Text>
      <Text>{item.coefficient}</Text>
      <Text>{item.items}</Text>
      <Text>{item.duree}</Text>
      <Text>{item.professeur}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* En-tête du tableau */}
      <View style={styles.headerRow}>
        <Text>Matière</Text>
        <Text>Coefficient</Text>
        <Text>Items</Text>
        <Text>Durée</Text>
        <Text>Professeur</Text>
      </View>

      {/* Contenu du tableau (défilement horizontal) */}
      <FlatList
        horizontal
        data={maquettes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderHorizontalCell}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 8,
    paddingBottom: 8,
  },
  horizontalCell: {
    flexDirection: 'column',
    marginRight: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    elevation: 3,
  },
});

export default Maquette;
