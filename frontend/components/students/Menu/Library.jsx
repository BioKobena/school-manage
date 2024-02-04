import React from 'react';
import { View, Image, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const Library = () => {
  const data = [
    { id: '1', title: 'Livre 1', author: 'Auteur 1', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg' },
    { id: '2', title: 'Livre 2', author: 'Auteur 2', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg' },
    { id: '2', title: 'Livre 2', author: 'Auteur 2', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg' },
    { id: '2', title: 'Livre 2', author: 'Auteur 2', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg' },
    { id: '2', title: 'Livre 2', author: 'Auteur 2', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg' },
    { id: '2', title: 'Livre 2', author: 'Auteur 2', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg' },
    { id: '2', title: 'Livre 2', author: 'Auteur 2', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg' },
    { id: '2', title: 'Livre 2', author: 'Auteur 2', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg' },
    { id: '2', title: 'Livre 2', author: 'Auteur 2', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg' },
    // Ajoutez d'autres livres avec leurs images, titres et auteurs
  ];

  const renderItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={{ uri: item.image }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenue sur la bibliothèque de IPIF</Text>
        <Text style={styles.additionalInfo}>Découvrez notre sélection de livres passionnants.</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true} // Liste horizontale
        numColumns={1} // Une seule colonne
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  additionalInfo: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  bookContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  bookImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  bookTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    marginTop: 4,
    fontSize: 14,
    color: 'gray',
  },
});

export default Library;
