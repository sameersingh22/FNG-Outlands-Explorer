import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
  return (
    <View style={styles.screenStyle}>
      <Text style = {styles.heading}>
        Introduction:
      </Text>

      

      <Text style = {styles.description}>
      There are 10 planets across the known multiverse that form the "Outlands". After the events of the video games "Titanfall 1" and "Titanfall 2", the Outlands were free of the centuries-long war perpetrated by the Interstellar Manufacturing Corporation (IMC). This resulted in chaos across the Outlands, and the revival of an old bloodsport: The Apex Games.  
      </Text>
      
      <Text>*</Text>

      <Text style = {styles.description}>
      In the Tianfall universe, there existed a mercenary group lead by Kuben Blisk, called the "Apex Predators". By the end of Titanfall 2, the player would have eliminated all the members of the group. The Apex Games were set up by Blisk in order to replenish his mercenary group and also to make a profit.  
      </Text>

      <Text>*</Text>

      
      <Text style = {styles.description}>
      In the Outlands, qualifying for the Apex Games is the most difficult challenge. The title of a "Legend" is given to all those who qualify. The objective of the game is simple: be the last man standing. Reasons for competing is different for all legends, ranging from fame, glory, fortune, answers, or simply for fun. 
      </Text>

      <Text>*</Text>

    </View>
  );
}

export { HomeScreen };

const styles = StyleSheet.create({

  screenStyle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20
  },

  heading: {
    fontWeight: "bold",
    fontSize: 25,
    textDecorationLine: 'underline'
  },

  description:{
    fontSize: 15,
    textAlign: "left"
  }
});