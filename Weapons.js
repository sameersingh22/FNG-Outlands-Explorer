import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const WeaponStack = createNativeStackNavigator();


function WeaponStackScreen() {
  return (
    <WeaponStack.Navigator>
      <WeaponStack.Screen name="Weapons" component ={WeaponScreen} options={{ headerShown: false }}/>
      <WeaponStack.Screen name="Assault Rifles" component = {AR}/>
      <WeaponStack.Screen name="AR Attachments" component = {AR_Attachments}/>
      <WeaponStack.Screen name="Sub Machine Guns" component = {SMG}/>
      <WeaponStack.Screen name="SMG Attachments" component = {SMG_Attachments}/>
      <WeaponStack.Screen name="Light Machine Guns" component = {LMG}/>
      <WeaponStack.Screen name="LMG Attachments" component = {LMG_Attachments}/>
      <WeaponStack.Screen name="Snipers" component = {Sniper}/>
      <WeaponStack.Screen name="Sniper Attachments" component = {Sniper_Attachments}/>
      <WeaponStack.Screen name="Shotguns" component = {Shotgun}/>
      <WeaponStack.Screen name="Shotgun Attachments" component = {Shotgun_Attachments}/>
      <WeaponStack.Screen name="Pistols" component = {Pistol}/>
      <WeaponStack.Screen name="Pistol Attachments" component = {Pistol_Attachments}/>
      </WeaponStack.Navigator>
  );
}

function WeaponScreen({ navigation }) {
  return (
    <View style={styles.weaponScreen}> 

      <View style={styles.screenStyle1}>
        <Pressable style={styles.button1} onPress={() => navigation.navigate('Assault Rifles')}>
          <Text>Assault Rifles</Text>
        </Pressable>
        
        <Pressable style={styles.button1} onPress={() => navigation.navigate('Sub Machine Guns')}>
          <Text>Sub Machine Guns</Text>
        </Pressable>

        <Pressable style={styles.button1} onPress={() => navigation.navigate('Light Machine Guns')}>
          <Text>Light Machine Guns</Text>
        </Pressable>
      </View>

    
      <View style={styles.screenStyle2}>
        <Pressable style={styles.button2} onPress={() => navigation.navigate('AR Attachments')}>
          <Text>Attachments</Text>
        </Pressable>
        
        <Pressable style={styles.button2} onPress={() => navigation.navigate('SMG Attachments')}>
          <Text>Attachments</Text>
        </Pressable>

        <Pressable style={styles.button2} onPress={() => navigation.navigate('LMG Attachments')}>
          <Text>Attachments</Text>
        </Pressable>
      </View>


      <View style={styles.screenStyle3}>
        <Pressable style={styles.button1} onPress={() => navigation.navigate('Snipers')}>
          <Text>Sniper Rifles</Text>
        </Pressable>
        
        <Pressable style={styles.button1} onPress={() => navigation.navigate('Shotguns')}>
          <Text>Shotguns</Text>
        </Pressable>

        <Pressable style={styles.button1} onPress={() => navigation.navigate('Pistols')}>
          <Text>Pistols</Text>
        </Pressable>
      </View>

    
      <View style={styles.screenStyle4}>

        <Pressable style={styles.button2} onPress={() => navigation.navigate('Sniper Attachments')}>
          <Text>Attachments</Text>
        </Pressable>
        
        <Pressable style={styles.button2} onPress={() => navigation.navigate('Shotgun_Attachments')}>
          <Text>Attachments</Text>
        </Pressable>

        <Pressable style={styles.button2} onPress={() => navigation.navigate('Pistol_Attachments')}>
          <Text>Attachments</Text>
        </Pressable>
      </View>
        
    </View>
  );
}


function AR({navigation}){
  return(
    <View>
    </View>
  );
}

function AR_Attachments({navigation}){
  return(
    <View>
    </View>
  );
}

function SMG({navigation}){
  return(
    <View>
    </View>
  );
}

function SMG_Attachments({navigation}){
  return(
    <View>
    </View>
  );
}

function LMG({navigation}){
  return(
    <View>
    </View>
  );
}

function LMG_Attachments({navigation}){
  return(
    <View>
    </View>
  );
}

function Sniper({navigation}){
  return(
    <View>
    </View>
  );
}

function Sniper_Attachments({navigation}){
  return(
    <View>
    </View>
  );
}

function Shotgun({navigation}){
  return(
    <View>
    </View>
  );
}

function Shotgun_Attachments({navigation}){
  return(
    <View>
    </View>
  );
}

function Pistol({navigation}){
  return(
    <View>
    </View>
  );
}

function Pistol_Attachments({navigation}){
  return(
    <View>
    </View>
  );
}

export { WeaponStackScreen };

const styles = StyleSheet.create({
 screenStyle1: {
    flex: 1,
    flexDirection: 'row', 
  },

  screenStyle2: {
    flex: .5,
    flexDirection: 'row', 
  },

  screenStyle3: {
    flex: 1,
    flexDirection: 'row', 
    
  },

  screenStyle4: {
    flex: .5,
    flexDirection: 'row', 
  },

  weaponScreen: {
    padding: 5,
    flex: 2,
    justifyContent: 'center',
  },

  button1: {
    flex: 1,
    margin: 1,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "transparent",
    borderRadius: 0,
    borderColor: '#000000', 
    borderWidth: 1,    
  },

  button2: {
    flex: 1,
    margin: 1,
    height: 50,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ce1ce',
    borderRadius: 0,
    borderColor: '#000000', 
    borderWidth: 1,    
  }, 

});