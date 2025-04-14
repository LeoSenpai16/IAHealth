// src/navigation/HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SelectTypeScreen from '../screens/SelectTypeScreen';
import GeneralDoctorScreen from '../screens/GeneralDoctorScreen';
import SpecialistScreen from '../screens/SpecialistScreen';
import PharmacyScreen from '../screens/PharmacyScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => {
              // Aquí puedes redirigir a una pantalla de perfil si deseas
              console.log('Profile pressed');
            }}
          >
            <Image
              source={require('../../assets/avatar-placeholder.png')}
              style={styles.avatar}
            />
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="IAHealth" component={HomeScreen} />
      <Stack.Screen name="SelectType" component={SelectTypeScreen} />
      <Stack.Screen name="GeneralDoctor" component={GeneralDoctorScreen} />
      <Stack.Screen name="Specialist" component={SpecialistScreen} />
      <Stack.Screen name="Pharmacy" component={PharmacyScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  profileText: {
    fontSize: 12,
    color: '#00BCD4',
    fontWeight: 'bold',
    marginTop: 4,
  },
});
