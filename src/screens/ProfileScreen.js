// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/profileStyles';


export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/user-avatar.png')}
        style={styles.avatar}
      />
    
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>Juan Pérez</Text>

        <Text style={styles.label}>Número de Teléfono:</Text>
        <Text style={styles.value}>+52 123 456 7890</Text>

        <Text style={styles.label}>Correo Electrónico:</Text>
        <Text style={styles.value}>juanperez@example.com</Text>

        <Text style={styles.label}>Dirección de Envío:</Text>
        <Text style={styles.value}>Calle Ficticia #123, Ciudad, País</Text>

        <Text style={styles.label}>Cartilla:</Text>
        <Text style={styles.value}>cartilla_juan.pdf</Text> {/* Simulación de nombre de archivo */}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UpdateProfileScreen')}
      >
        <Text style={styles.buttonText}>Actualizar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

