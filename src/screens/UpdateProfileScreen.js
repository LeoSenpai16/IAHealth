import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Styles/UpdateProfileStyles';


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

