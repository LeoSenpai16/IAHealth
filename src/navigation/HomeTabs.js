// src/navigation/HomeTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'; 
import OrderScreen from '../screens/OrderScreen';
import DateBookScreen from '../screens/DateBookScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator   screenOptions={{headerTitleAlign: 'center'}}>
      <Tab.Screen name="IAHealth" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Date" component={DateBookScreen} />
    </Tab.Navigator>
  );
}
