// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f7fa',
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#00BCD4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
