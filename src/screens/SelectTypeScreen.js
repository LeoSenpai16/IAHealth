import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SelectTypeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona el tipo de consulta</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GeneralDoctor')}>
        <Text style={styles.buttonText}>General</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Specialist')}>
        <Text style={styles.buttonText}>Especialista</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2e86de',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
