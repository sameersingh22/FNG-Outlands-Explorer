import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
console.reportErrorsAsExceptions = false;
const LegendStack = createNativeStackNavigator();


function LegendStackScreen() {
  return (
    <LegendStack.Navigator>
      <LegendStack.Screen name="Legends" component ={LegendScreen} options={{ headerShown: false }}/>
      <LegendStack.Screen name="Bloodhound" component = {Bloodhound}/>
      <LegendStack.Screen name="Gibraltar" component = {Gibraltar}/>
      <LegendStack.Screen name="Lifeline" component = {Lifeline}/>
      <LegendStack.Screen name="Pathfinder" component = {Pathfinder}/>
      <LegendStack.Screen name="Wraith" component = {Wraith}/>
      <LegendStack.Screen name="Bangalore" component = {Bangalore}/>
      <LegendStack.Screen name="Caustic" component = {Caustic}/>
      <LegendStack.Screen name="Mirage" component = {Mirage}/>
      <LegendStack.Screen name="Octane" component = {Octane}/>
      <LegendStack.Screen name="Wattson" component = {Wattson}/>
      <LegendStack.Screen name="Crypto" component = {Crypto}/>
      <LegendStack.Screen name="Revenant" component = {Revenant}/>
      <LegendStack.Screen name="Loba" component = {Loba}/>
      <LegendStack.Screen name="Rampart" component = {Rampart}/>
      <LegendStack.Screen name="Horizon" component = {Horizon}/>
      <LegendStack.Screen name="Fuse" component = {Fuse}/>
      <LegendStack.Screen name="Valkyrie" component = {Valkyrie}/>
      <LegendStack.Screen name="Seer" component = {Seer}/>
      <LegendStack.Screen name="Ash" component = {Ash}/>
      <LegendStack.Screen name="Mad Maggie" component = {Mad_Maggie}/>     
    </LegendStack.Navigator>
  );
}

function LegendScreen({ navigation }) {
  return (
   
    <ScrollView>    
      <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('./assets/homeBG.png')}>

     <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Bloodhound')}>
        <Text>Bloodhound</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Gibraltar')}>
        <Text>Gibraltar</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Lifeline')}>
        <Text>Lifeline</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Pathfinder')}>
        <Text>Pathfinder</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Wraith')}>
        <Text>Wraith</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Bangalore')}>
        <Text>Bangalore</Text>
      </Pressable>
      
      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Caustic')}>
        <Text>Caustic</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Mirage')}>
        <Text>Mirage</Text>
      </Pressable>
      
      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Octane')}>
        <Text>Octane</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Wattson')}>
        <Text>Wattson</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Crypto')}>
        <Text>Crypto</Text>
      </Pressable>
      
      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Revenant')}>
        <Text>Revenant</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Loba')}>
        <Text>Loba</Text>
      </Pressable>
      
      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Rampart')}>
        <Text>Rampart</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Horizon')}>
        <Text>Horizon</Text>
      </Pressable>
      
      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Fuse')}>
        <Text>Fuse</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Valkyrie')}>
        <Text>Valkyrie</Text>
      </Pressable>
      
      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Seer')}>
        <Text>Seer</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Ash')}>
        <Text>Ash</Text>
      </Pressable>

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Mad_Maggie')}>
        <Text>Mad Maggie</Text>
      </Pressable>
     </ImageBackground>
    </ScrollView> 
  );
}

function Bloodhound({navigation}){
  return(
      <View> 
      </View>
  );
}

function Gibraltar({navigation}){
  return(
    <View>
    </View>
  );
}

function Lifeline({navigation}){
  return(
    <View>
    </View>
  );
}

function Pathfinder({navigation}){
  return(
    <View>
    </View>
  );
}

function Wraith({navigation}){
  return(
    <View>
    </View>
  );
}

function Bangalore({navigation}){
  return(
    <View>
    </View>
  );
}

function Caustic({navigation}){
  return(
    <View>
    </View>
  );
}

function Mirage({navigation}){
  return(
    <View>
    </View>
  );
}

function Octane({navigation}){
  return(
    <View>
    </View>
  );
}

function Wattson({navigation}){
  return(
    <View>
    </View>
  );
}

function Crypto({navigation}){
  return(
    <View>
    </View>
  );
}

function Revenant({navigation}){
  return(
    <View>
    </View>
  );
}

function Loba({navigation}){
  return(
    <View>
    </View>
  );
}

function Rampart({navigation}){
  return(
    <View>
    </View>
  );
}

function Horizon({navigation}){
  return(
    <View>
    </View>
  );
}

function Fuse({navigation}){
  return(
    <View>
    </View>
  );
}

function Valkyrie({navigation}){
  return(
    <View>
    </View>
  );
}

function Seer({navigation}){
  return(
    <View>
    </View>
  );
}

function Ash({navigation}){
  return(
    <View>
    </View>
  );
}

function Mad_Maggie({navigation}){
  return(
    <View>
    </View>
  );
}

export { LegendStackScreen };

const styles = StyleSheet.create({


    legendButton:{
    flex: 1,
    width: 275,
    padding:10,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 30, 
    borderColor: '#000000',  
    borderWidth: 1,
    opacity: .5,
  },
  
    imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: .95
  },
  
});