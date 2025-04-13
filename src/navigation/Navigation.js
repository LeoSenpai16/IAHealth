import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens
import OrderScreen from "../screens/OrderScreen";
import DateBookScreen from "../screens/DateBookScreen";
import HomeScreen from "../screens/HomeScreen";


const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Order" component={OrderScreen}/>
      <Tab.Screen name="Date" component={DateBookScreen}/>
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return(
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}