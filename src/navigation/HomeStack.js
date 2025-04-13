// src/navigation/HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SelectTypeScreen from '../screens/SelectTypeScreen';
import GeneralDoctorScreen from '../screens/GeneralDoctorScreen';
import SpecialistScreen from '../screens/SpecialistScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SelectType" component={SelectTypeScreen} />
      <Stack.Screen name="GeneralDoctor" component={GeneralDoctorScreen} />
      <Stack.Screen name="Specialist" component={SpecialistScreen} />
    </Stack.Navigator>
  );
}
