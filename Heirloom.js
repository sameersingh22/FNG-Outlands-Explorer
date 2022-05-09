{/*
-----------------------------------------------------------------------------------------
||||||||||||||||||CREDITS////////////////////////////////////////////////////////////////
code referred from a YouTube video 
titled "Sum of Two Number in React Native"
URL: https://www.youtube.com/watch?v=PrkxUTEbZmI&ab_channel=ComputerScienceTutorial
-----------------------------------------------------------------------------------------

Name: Sameer Singh
SID: 200401374
Project for Class: CS 455

FNG Outlands Explorer 1.0.0

*/}

import * as React from 'react';
import { Component } from 'react'; 
import { View, StyleSheet, TextInput, Pressable, Text, ImageBackground} from "react-native";


{/*
Since functional components make it very difficult to manage states and variables, a class component was used for "Heirloom Calculator" Screen.


The calculator takes into account the user level, number of packs purchased and obtained from other sources (battle pass, events, quests, bugs, etc) and calculated number of packs opened. The last 2 factors are simple to consider (1 pack purchased/obtained would mean 1 pack opened). However, in case of the user/player's account level, it is much more complicated.

For levels 2-20, 1 pack every level (maximum 19 packs)
For levels 22-300, 1 pack every 2 levels (maximum 140 packs)
For levels 305-500, 1 pack every 5 levels (maximum 40 packs)

Since an heirloom drop is gauranteed every 500 packs, a player can find this tool very helpful to plan when/if to buy more Apex packs, and exactly how many.

*/}

   {/*
   
   * HeirloomCalculator
   * 
   * Purpose: 
This function displays the Heirloom Calculator Screen. It makes use of the super class with props passed as a parameter inside a constructor enabling us to use "this" keyword for state manipulation. The default state for 3 variables has been set {Level:1 (represents the user's account level),Purchased:0 (represents number of packs purchased), Other_Sources:0 (represents number of packs obtained by other means)}. These 3 states are inputted from the user, and with the help of a Pressable, the sum function is called. The sum function declares 4 variables (we have already seen the first 3). The fourth variable Account_Level_Packs represents the number of packs obtained by levelling up. It is not assigned any value when declared, but some conditional statements are used to appropriately assign its value based on our first variable (User's account level). Finally, since JS considers + operator as concatenation, and not addition, multiple parseInt functions have been used to correctly evaluate the result.
   * 
   * Parameter(s): None (no parameters passed in the main class, but props is passed in the constructor, as well as the super class)
   * 
   * Precondition(s): None
   * 
   * Returns: Sum of packs obtained the the above mentioned 3 sources.
   * 
   * Side effect:
   * <1> The app will render the Hierloom Calculator Screen. 
   *    
   * 
  */}
class HeirloomCalculator extends Component 
{ 

  
  constructor(props) 
  {
    super(props); 
    this.state={Level:1,Purchased:0,Other_Sources:0};
  }


  Sum=()=>
  {
    var Packs_Purchased = parseInt(this.state.Purchased, 10); 
    var Other_Packs = parseInt(this.state.Other_Sources, 10); 
    var Account_level = parseInt(this.state.Level, 10); 
    var Account_Level_Packs;

    if (Account_level < 1) {
		  alert("Account level should be atleast 1");
    }
    else if (Account_level == 1) {
		  Account_Level_Packs = parseInt('0', 10);
	  }
    
	  else if (Account_level <= 20) {
		  Account_Level_Packs = parseInt(this.state.Level, 10) - 1;
	  } 
    else if (Account_level <= 300) {
		  Account_Level_Packs = 19 + Math.floor( (parseInt(this.state.Level, 10) - 20) / 2 );
    }

    else if (Account_level <= 500) {
		  Account_Level_Packs = 19 +  140  + Math.floor( (parseInt(this.state.Level, 10) - 300) / 5 );
	  } 
    else {
		  alert("Account level cannot exceed 500");
	  }

    if (Account_level > 0 && Account_level < 501)
    {
      var R = Packs_Purchased + Other_Packs + Account_Level_Packs;

      alert(R); 
    } 
  }

  render() 
  { 
    return( 
        <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('./assets/homeBG.png')}>

      <View style={styles.screenStyle}> 
        <Text style = {styles.description}>
        This section of the app will calculate how many Apex packs you have opened.
        </Text>


        <TextInput style={styles.input} placeholder = "Enter your account level" placeholderTextColor="white" onChangeText = {Level=>this.setState({Level})}/>
        <TextInput style={styles.input} placeholder = "Number of packs purchased" placeholderTextColor="white" onChangeText = {Purchased=>this.setState({Purchased})}/> 
        <TextInput style={styles.input} placeholder = "Packs obtanied from other sources" placeholderTextColor="white" onChangeText = {Other_Sources=>this.setState({Other_Sources})}/>

      <Pressable style={styles.button} onPress={this.Sum}>
        <Text>Calculate!</Text>
      </Pressable>
      
      </View>
      </ImageBackground>
    );
  }
} 


const styles = StyleSheet.create({

  screenStyle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10 
  },

  description:{
    fontSize: 25,
    color: "white"
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: .95
  },

  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: 275,
    borderColor: "white",
    color: "white"
  },

  button:{
    margin: 1,
    height: 45,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50ff33',
    borderRadius: 30, 
    borderColor: '#000000',  
    borderWidth: 1,   
  }
});





export default HeirloomCalculator;