import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Curriculum = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{uri:"https://img.freepik.com/photos-gratuite/portrait-jeune-femme-ordinateur-portable-dans-mains-exterieur-ecole_641386-1029.jpg?size=626&ext=jpg&ga=GA1.1.243878169.1698685310&semt=ais"}}
          style={styles.profileImage}
        />
        <View style={styles.details}>
          <Text style={styles.name}>Votre Nom</Text>
          <Text style={styles.title}>Étudiant</Text>
          <Text style={styles.sectionTitle}>Formation</Text>
          <Text style={styles.text}>Nom de l'établissement</Text>
          <Text style={styles.text}>Diplôme obtenu</Text>
          <Text style={styles.sectionTitle}>Expérience</Text>
          <Text style={styles.text}>Poste occupé</Text>
          <Text style={styles.text}>Nom de l'entreprise</Text>
          <Text style={styles.sectionTitle}>Compétences</Text>
          <Text style={styles.text}>Compétence 1</Text>
          <Text style={styles.text}>Compétence 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
    flexDirection: 'row',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  title: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
});

export default Curriculum;
