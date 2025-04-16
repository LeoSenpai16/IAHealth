import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SelectTypeScreen from '../screens/SelectTypeScreen';
import GeneralDoctorScreen from '../screens/GeneralDoctorScreen';
import SpecialistScreen from '../screens/SpecialistScreen';
import PharmacyScreen from '../screens/PharmacyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ConfirmVisit from '../screens/ConfirmVisit';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  
  const ProfileButton = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.profileButton}>
        <Image source={require('../../assets/avatar-placeholder.png')} style={styles.avatar} />
        <Text style={styles.profileText}>Profile</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator   screenOptions={{headerTitleAlign: 'center',}}>
      <Stack.Screen
        name="IAHealth"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerRight: () => <ProfileButton />,
        }}
      />
      <Stack.Screen name="SelectType" component={SelectTypeScreen} />
      <Stack.Screen name="GeneralDoctor" component={GeneralDoctorScreen} />
      <Stack.Screen name="Specialist" component={SpecialistScreen} />
      <Stack.Screen name="Pharmacy" component={PharmacyScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="ConfirmVisit" component={ConfirmVisit} />

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
