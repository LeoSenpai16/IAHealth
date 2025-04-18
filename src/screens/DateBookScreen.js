import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from '../Styles/DateStyles';

export default function DateBookScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/calendar-icon.png')} // Usa una imagen representativa
        style={styles.image}
      />
      <Text style={styles.title}>Mis Citas</Text>
      <Text style={styles.subtitle}>Aquí verás tus próximas citas médicas</Text>
    </View>
  );
}

