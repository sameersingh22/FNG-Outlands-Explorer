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


const Tab = createMaterialBottomTabNavigator();

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
