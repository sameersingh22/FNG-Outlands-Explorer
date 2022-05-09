{/*
Name: Sameer Singh
SID: 200401374
Project for Class: CS 455

FNG Outlands Explorer 1.0.0
*/}

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LegendStackScreen } from "./Legends";
import { HomeScreen } from "./Home";
import HeirloomCalculator from './Heirloom';
import { StatusBar } from 'react-native';

{/*

Declaring a variable called Tab using the createMaterialBottomTabNavigator() method. This will create a bottom TAB navigator and allow us to navigate between the 3 main screens of the app. We can use the variable Tab as an object (dot notation) to handle the navigation.

*/}
const Tab = createMaterialBottomTabNavigator();

   {/*
   
   * MyTabs
   * 
   * Purpose: 
This function renders the bottom tab navigator and stores all details for each tab (main screen) of the app. 

   * Parameter(s): None
   * 
   * Precondition(s): The material bottom tab navigator instance named Tab must be iniitialised. 
   * 
   * Returns: The bottom tab navigator of the app.
   * 
   * Side effect:
   * <1> The app will render the tab navigator that allows us to switch between the main screens of our app. 
   *    
   * 
  */}

function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      shifting = {false}
      activeColor="goldenrod"
      labelStyle={{ fontSize: 17 }}
      style={{ backgroundColor: 'navy'}}>  

    <Tab.Screen
        name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color="black" size={26} />
          ),
        }}
      />

 <Tab.Screen
        name="Legends" component={LegendStackScreen}
        options={{
          tabBarLabel: 'Legends',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-sharp" size={24} color="black" />
          ),
        }}
      />



      <Tab.Screen
        name="Heirloom Calculator" component={HeirloomCalculator}
        options={{
          tabBarLabel: 'Heirloom Calculator ',
          tabBarIcon: ({ color }) => (
            <AntDesign name="calculator" size={24} color="black" />
          ),
        }}
      />

</Tab.Navigator>
      
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
