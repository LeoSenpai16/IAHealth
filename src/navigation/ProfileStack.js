import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ headerTitleAlign: 'center' , headerTitle: 'Profile'}} />
      <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} options={{ headerTitleAlign: 'center', headerTitle: 'Update Perfil' }} />
    </Stack.Navigator>
  );
}
