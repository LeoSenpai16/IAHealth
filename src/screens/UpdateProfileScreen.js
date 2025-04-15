import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function UpdateProfileScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/avatar-placeholder.png')}
        style={styles.avatar}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre completo</Text>
        <TextInput style={styles.input} placeholder="Ej. Juan Pérez" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput style={styles.input} placeholder="Ej. juan@email.com" keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número de teléfono</Text>
        <TextInput style={styles.input} placeholder="Ej. 55 1234 5678" keyboardType="phone-pad" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dirección para envío</Text>
        <TextInput style={styles.input} placeholder="Ej. Calle 123, Ciudad, Estado" />
      </View>

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>Subir cartilla</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => navigation.navigate('UpdateProfile')}>
        <Text style={styles.updateText}>Actualizar perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e3f7fa',
    flexGrow: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    elevation: 2,
  },
  uploadButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  uploadText: {
    color: '#333',
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#00BCD4',
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  updateText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
