import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00BCD4',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});
