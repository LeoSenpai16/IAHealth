//navigation/HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SelectTypeScreen from '../screens/SelectTypeScreen';
import GeneralDoctorScreen from '../screens/GeneralDoctorScreen';
import SpecialistScreen from '../screens/SpecialistScreen';
import PharmacyScreen from '../screens/PharmacyScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ConfirmVisit from '../screens/ConfirmVisit';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerTitleAlign: 'center', headerTitle: 'IAHealth'}}/>
      <Stack.Screen name="SelectType" component={SelectTypeScreen} options={{ headerTitleAlign: 'center' , headerTitle: 'Select a type'}} />
      <Stack.Screen name="GeneralDoctor" component={GeneralDoctorScreen} options={{ headerTitleAlign: 'center' , headerTitle: 'General Doctor'}}/>
      <Stack.Screen name="Specialist" component={SpecialistScreen} options={{ headerTitleAlign: 'center' , headerTitle: 'Especialist Doctor'}}/>
      <Stack.Screen name="Pharmacy" component={PharmacyScreen} options={{ headerTitleAlign: 'center' , headerTitle: 'Pharmacys'}}/>
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerTitleAlign: 'center' , headerTitle: 'Pharmacy'}}/>
      <Stack.Screen name="ConfirmVisit" component={ConfirmVisit} options={{ headerTitleAlign: 'center' , headerTitle: 'Map'}}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  profileText: {
    fontSize: 10,
    color: '#000',
  },
});
