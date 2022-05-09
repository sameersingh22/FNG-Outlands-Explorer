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
      <Text>
      Apex Lore:
      </Text>

    </View>
  );
}

export { HomeScreen };

const styles = StyleSheet.create({

  screenStyle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});