import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'importer le package des icônes

const Access = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // Ajoutez ici la logique de modification du mot de passe
    // Assurez-vous de valider le mot de passe actuel, le nouveau mot de passe, et la confirmation du mot de passe
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier le mot de passe</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe actuel"
          secureTextEntry
          value={oldPassword}
          onChangeText={setOldPassword}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nouveau mot de passe"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmer le nouveau mot de passe"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleChangePassword}
      >
        <Text style={styles.buttonText}>Modifier le mot de passe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  icon: {
    marginRight: 12,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Access;
