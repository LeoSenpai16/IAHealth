// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/profileStyles';
import { getCurrentUser } from '../Services/userService';

export default function ProfileScreen({ navigation }) {
    const user = getCurrentUser();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/user-avatar.png')}
        style={styles.avatar}
      />
    
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{user?.name}</Text>

        <Text style={styles.label}>Número de Teléfono:</Text>
        <Text style={styles.value}>{user?.phone}</Text>

        <Text style={styles.label}>Correo Electrónico:</Text>
        <Text style={styles.value}>{user?.email}</Text>

        <Text style={styles.label}>Dirección de Envío:</Text>
        <Text style={styles.value}>{user?.address}</Text>

        <Text style={styles.label}>Cartilla:</Text>
        <Text style={styles.value}></Text> 
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
