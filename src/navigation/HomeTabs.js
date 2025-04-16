import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HomeStack from './HomeStack'; // Asegúrate de que HomeStack está importado
import OrderScreen from '../screens/OrderScreen';
import DateBookScreen from '../screens/DateBookScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  const ProfileButton = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity 
        onPress={() => navigation.navigate('Profile')} // Navega a la pantalla Profile
        style={styles.profileButton}
      >
        <Image source={require('../../assets/avatar-placeholder.png')} style={styles.avatar} />
        <Text style={styles.profileText}>Profile</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'IAHealth') {
            iconName = 'heart';
          } else if (route.name === 'Order') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Date') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="IAHealth"
        component={HomeStack} // HomeStack está correctamente registrado aquí
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          headerRight: () => <ProfileButton />,
        }}
      />
      <Tab.Screen
        name="Date"
        component={DateBookScreen}
        options={{
          headerRight: () => <ProfileButton />,
        }}
      />
    </Tab.Navigator>
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
