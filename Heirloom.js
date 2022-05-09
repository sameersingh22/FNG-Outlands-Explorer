import * as React from 'react';
import { Component } from 'react'; 
import { Alert, View, StyleSheet, TextInput, Pressable, Text} from "react-native";
    
class HeirloomCalculator extends Component 
{ 
  showAlert=()=> 
  {  
    
  }  
  
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
      <View style={styles.screenStyle}> 
        <Text style = {styles.description}>
        This section of the app will calculate how many Apex packs you have opened.
        </Text>

        <Text>
        </Text>

        <TextInput style={styles.input} placeholder = "Enter your account level" onChangeText = {Level=>this.setState({Level})}/>
        <TextInput style={styles.input} placeholder = "Number of packs purchased" onChangeText = {Purchased=>this.setState({Purchased})}/> 
        <TextInput style={styles.input} placeholder = "Packs obtanied from other sources" onChangeText = {Other_Sources=>this.setState({Other_Sources})}/>

      <Pressable style={styles.button} onPress={this.Sum}>
        <Text>Calculate!</Text>
      </Pressable>
      
      </View>
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
    fontSize: 25
  },

  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: 275
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


{/*

code reference from a YouTube video 
titled "Sum of Two Number in React Native"
https://www.youtube.com/watch?v=PrkxUTEbZmI&ab_channel=ComputerScienceTutorial



*/}


export default HeirloomCalculator;