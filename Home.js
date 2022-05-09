import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';



function HomeScreen() {return (

  <ImageBackground style={styles.imgBackground} 
    resizeMode='cover' 
    source={require('./assets/homeBG.png')}>

    <View style={styles.screenStyle}>

      <Text style = {styles.heading}>
        Introduction:
      </Text>

      <Text style = {styles.lineBreak}>*</Text>

      <Text style = {[styles.description, {color: "tomato"}]}>
        There are 10 planets across the known multiverse that form the "Outlands". After the events of "Titanfall 1" and "Titanfall 2", the Outlands were free of the centuries-long war perpetrated by Interstellar Manufacturing Corporation (IMC). This resulted in chaos across the Outlands, and the revival of an old bloodsport: The Apex Games.  
      </Text>
      
      <Text style = {styles.lineBreak}>*</Text>
      <Text style = {styles.lineBreak}>*</Text>
      <Text style = {styles.lineBreak}>*</Text>
    
      <Text style = {[styles.description, {color: '#00FF00'}]}>
      In the Tianfall universe, there existed a mercenary group lead by Kuben Blisk, called the "Apex Predators". By the end of Titanfall 2, the player would have eliminated all the members of the group. The Apex Games were set up by Blisk in order to replenish his mercenary group and also to make a profit.  
      </Text>

      <Text style = {[styles.description, {color: '#00FFFF'}]}>
      In the Outlands, qualifying for the Apex Games is the most difficult challenge. The title of a "Legend" is given to all those who qualify. The objective of the game is simple: be the last man standing. Reasons for competing is different for all legends, ranging from fame, glory, fortune, answers, or simply for fun. 
      </Text>

    
    </View>
  </ImageBackground>
);}

export { HomeScreen };

const styles = StyleSheet.create({

  screenStyle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: .95
  },

  heading: {
    fontWeight: "bold",
    fontSize: 25,
    textDecorationLine: 'underline',
    textAlign: "center",
    color: "white",
    
  },


    
  lineBreak: {
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
    opacity: 0
  },

  description:{
    fontSize: 18,
    textAlign: "left",
    fontWeight: "bold",
   
  }
});