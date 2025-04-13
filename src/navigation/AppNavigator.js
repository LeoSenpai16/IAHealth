import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SelectTypeScreen from "../screens/SelectTypeScreen"; 
import HomeTabs from "./HomeTabs"; 

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainApp" component={HomeTabs} options={{ headerShown: false }} />
      <Stack.Screen name="SelectType" component={SelectTypeScreen} />
    </Stack.Navigator>
  );
}
