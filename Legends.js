import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Pressable, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
      <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('./assets/homeBG.png')}>

<ScrollView style = {styles.screenStyle}>   
    <Text style = {{color: "white"}}>There are 3 abilities for each legend: Passive (no recharge time, always active), Tactical (short recharge duration), and an Ultimate (longer recharge duration) ability.  Choose a legend from the list below to learn more about each of their individual abilities.</Text>


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

      <Pressable style={styles.legendButton} onPress={() => navigation.navigate('Mad Maggie')}>
        <Text>Mad Maggie</Text>
      </Pressable>
    
    </ScrollView> 
     </ImageBackground>
  );
}

function Bloodhound({navigation}){
return(
    
  <ImageBackground style={[styles.imgBackground, {opacity:0.7}]}
    resizeMode='cover' 
    source={require('./assets/bloodhound.png')}>

    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Tracker</Text>
        <Text style = {styles.description}>See tracks left behind by your foes.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Eye of the Allfather (Cooldown: 25s)</Text>
        <Text style = {styles.description}>Briefly reveal enemies, traps, and clues through all structures in front of you.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Beast of the Hunt (Cooldown: 3 min)</Text>
        <Text style = {styles.description}>Transform into the ultimate hunter. Enhances your senses, allowing you to see cold tracks and move faster. The tactical cooldown is reduced from 25s to 5s during the Ultimate, and knocking down an opponent extends the ultimate ability's duration.</Text>
      </View>
 
 
    </ScrollView>
  </ImageBackground>
);}

function Gibraltar({navigation}){
return(    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/gibraltar.png')}>

    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Gun Shield</Text>
        <Text style = {styles.description}>Aiming down sights deploys a gun shield that blocks incoming fire, once damaged for 50 hp the gunshield will be destroyed without you taking any damage. The shield regenerates back to full health in 9 seconds.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Dome of Protection (Cooldown: 30s)</Text>
        <Text style = {styles.description}>Throws down a defensive force-field shield that locks incoming and outgoing attacks. The time taken by Gibraltar to revive teammates inside this dome is much lower than reviving outside the Tactical.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Defensive Bombardment (Cooldown: 4.5 min)</Text>
        <Text style = {styles.description}>Call in a concentrated mortar strike on a position you mark with smoke.For 6 seconds, explosives continuously rain down on the area, dealing 40 damage per hit and shell-shocking players. The area is marked for all players with red circles indicating where mortar shells will hit.</Text>
      </View>
 
 
    </ScrollView>
  </ImageBackground>
);}

function Lifeline({navigation}){
return(

    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/lifeline.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Combat Revive</Text>
        <Text style = {styles.description}>Deploy D.O.C. to revive teammates, leaving Lifeline free to defend. Both teammates can be revived simultaneously, without Lifeline having to use the Revive animation.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>D.O.C. Heal Drone (Cooldown: 45s)</Text>
        <Text style = {styles.description}>The Drone Of Compassion (DOC) automatically heals those (teammates AND enemies) near it over time.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Care Package (Cooldown: 5 min)</Text>
        <Text style = {styles.description}>Call in a droppod full of high quality defensive gear. There are 3 panels in a lifeline care package: 1 carries shield cells and syringes, another panel carries a high-level wearable gear (body shield/helmet/backpack/kncockdown shield), and the last panel carries a high-level weapon attachment. Loot obtained from last 2 panels is always a gauranteed upgrade for a random team member. This means that if panel 2 was to carry a body shield, but all 3 members already have a level 3 shield, the care package's body shield level would be 4. On the other hand, even if 1 teammate has a level 2 shield, there are chances of receiving a level 3 shield even if other 2 squad members have that equipped. The same goes for helmets, backpacks and kncockdown shields. </Text>
      </View>
    
 
    </ScrollView>
  </ImageBackground>
);}

function Pathfinder({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/pathfinder.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Insider Knowledge</Text>
        <Text style = {styles.description}>Scan a Survey Beacon to reduce the cooldown of Grappling Hook, and to instantly charge up the Zipline Gun.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Grappling Hook (Cooldown: 10s - 30s)</Text>
        <Text style = {styles.description}>Grapple to get to out-of-reach places quickly. Just like any other recon character, Pathfinder can use Survey Beacons to scan for the next ring location. Scanning a survey beacon as Pathfinder reduces 10 seconds from Tactical cooldown, and also instantly recharges the Ultimate ability to 100%.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Zipline Gun</Text>
        <Text style = {styles.subHeading}>Name of Ultimate (Cooldown: 2 min)</Text>
        <Text style = {styles.description}>Create a zipline for everyone to use.</Text>
      </View>

    </ScrollView>
  </ImageBackground>
);}

function Wraith({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/wraith.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Voices from the Void</Text>
        <Text style = {styles.description}>You hear a voice when danger approaches. The player can share the information with their squadmates when the voice warns of danger.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Into the Void (Cooldown: 25s)</Text>
        <Text style = {styles.description}>Reposition quickly through the safety of void space, avoiding all damage.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Dimensional Rift (Cooldown: 3.5 min)</Text>
        <Text style = {styles.description}>Link 2 locations with portals for 60 seconds.</Text>
      </View>
 
 
    </ScrollView>
  </ImageBackground>
);}

function Bangalore({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/bangalore.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Double Time</Text>
        <Text style = {styles.description}>Taking fire while sprinting makes you move faster for a brief time.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Smoke Launcher (Cooldown: 33s, 2 charges)</Text>
        <Text style = {styles.description}>Fire a high velocity smoke canister that explodes into a smoke wall on impact.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Rolling Thunder (Cooldown: 3 min)</Text>
        <Text style = {styles.description}>Call in an artillery strike that slowly creeps across the landscape.</Text>
      </View>

    
 
    </ScrollView>
  </ImageBackground>
);}

function Caustic({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/caustic.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Nox Vision</Text>
        <Text style = {styles.description}>You gain threat vision on enemies moving through your gas.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Nox Gas Trap (Cooldown: 20s, 3 charges)</Text>
        <Text style = {styles.description}>Place up to 6 canisters that release deadly Nox gas when shot or triggered by enemies. Caustic gas traps can be "diffused" by shooting at its base (not the top, or the body).</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Nox Gas Grenade (Cooldown: 3 min)</Text>
        <Text style = {styles.description}>Blanket a large area in the highly-corrosive Nox gas.</Text>
      </View>


 
    </ScrollView>
  </ImageBackground>
);}

function Mirage({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/mirage.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Now You See me...</Text>
        <Text style = {styles.description}>Automatically cloaks and turns invisible when using a Respawn Beacon or while reviving teammates.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Psyche Out (Cooldown: 15s)</Text>
        <Text style = {styles.description}>Send out a holographic decoy to confuse the enemy. The decoy can be controlled and can mimic player movements (the player can toggle between "Control decoy" and "Release Control").</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Name of Ultimate (Cooldown: 1 min)</Text>
        <Text style = {styles.description}>Mirage deploys a team of 5 controllable decoys, each with 45 hp to distract enemies. These decoys always mimic the player, and the control cannot be released. All decoys created by mirage have footstep sounds. When an enemy shoot at a decoy (Tactical/Ultimate), Mirage gets a notification and that enemy's location is momentarily revealed.</Text>
      </View>
    
 
    </ScrollView>
  </ImageBackground>
);}

function Octane({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/octane.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Swift Mend</Text>
        <Text style = {styles.description}>While not taking damage, Octane restores health over time.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Stim (Cooldown: 1s)</Text>
        <Text style = {styles.description}>Increase walk speed by 30% and sprint speed by 40% for 6 seconds. Costs 20 Health to use if the player has atleast 21 hp. Otherwise, leaving 1 hp, all remaining health is used.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Launch Pad (Cooldown: 1.5 min)</Text>
        <Text style = {styles.description}>Deployable jump pad that catapults users through the air. Jump pad users can double jump in mid-air.</Text>
      </View>

    
 
    </ScrollView>
  </ImageBackground>
);}

function Wattson({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/wattson.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Spark of Genius</Text>
        <Text style = {styles.description}>Ultimate Accelerants fully charge Wattson's ultimate and she can carry more Ultimate Accelerants. Wattson slowly restores her shields over time.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Perimeter Security (Cooldown: 15s, 4 charges)</Text>
        <Text style = {styles.description}>Create electrified fences by connecting nodes. Fences damage and slow enemies.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Interception Pylon (Cooldown: 3 min)</Text>
        <Text style = {styles.description}>Place an electrified pylon that destroys incoming ordnance and repairs damaged shields. Standing near Pylons boosts Wattson's tactical recharge rate.</Text>
      </View>
   
 
    </ScrollView>
  </ImageBackground>
);}

function Crypto({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/crypto.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Neurolink</Text>
        <Text style = {styles.description}>Crypto and his teammates see what his Surveillance Drone detects up to a 30m distance.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Surveillance Drone (Cooldown: 40s)</Text>
        <Text style = {styles.description}>Deploy an aerial camera drone that can remotely interact with Survey Beacons, Respawn Beacons, and ally Banner cards. Also, across the map there are multiple "banners" displaying the current champion/kill leader. If Crypto pings that banner with his drone, the squad is notified of the number of squads in a 200m radius around Crypto.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Drone EMP (Cooldown: 3 min)</Text>
        <Text style = {styles.description}>Charge up an EMP from your drone. The blast deals 50 shield damage, slows players, and destroys traps.</Text>
      </View>

   
 
    </ScrollView>
  </ImageBackground>
);}

function Revenant({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/revenant.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Stalker</Text>
        <Text style = {styles.description}>You crouch walk faster and can climb walls higher.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Silence (Cooldown: 25s, 2 charges)</Text>
        <Text style = {styles.description}>Throw a device that deals damage and disables enemy abilities for a time.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Death Totem (Cooldown: 3 min)</Text>
        <Text style = {styles.description}>Drop a totem that protects users from death. Instead of getting killed or downed, you will return to the totem. Armor is deactivated during Death Protection.</Text>
      </View>

  
 
    </ScrollView>
  </ImageBackground>
);}

function Loba({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/loba.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Eye for Quality</Text>
        <Text style = {styles.description}>Nearby epic and legendary loot can be seen through walls. The range is the same as Black Market Boutique</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Burglar's Best Friend (Cooldown: 30s)</Text>
        <Text style = {styles.description}>Teleport to hard-to-reach places or escape trouble quickly by throwing your jump drive bracelet.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Black Market Boutique (Cooldown: 2 min)</Text>
        <Text style = {styles.description}>Place a portable device that allows you to teleport nearby loot to your inventory. Each friendly or enemy Legend can take up to two items. Although all legends start with a 0% Ultimate charge, Loba starts with a 50% charge.</Text>
      </View>
  
 
    </ScrollView>
  </ImageBackground>
);}

function Rampart({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/rampart.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Modded Loader</Text>
        <Text style = {styles.description}>Increased magazine capacity and faster reloads when using LMGs and the Minigun.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Amped Cover (Cooldown: 20s, 3 charges)</Text>
        <Text style = {styles.description}>Build a crouch-cover wall, which deploys a full-cover amped wall that blocks incoming shots and amps outgoing shots. (Max: 5)</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Mobile Minigun "Sheila" (Cooldown: 2 min)</Text>
        <Text style = {styles.description}>Wield a mobile minigun with a single high capacity magazine. Place it down for anyone to use as a stationary and reloadable turret. (Max: 3)</Text>
      </View>

   
 
    </ScrollView>
  </ImageBackground>
);}

function Horizon({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/horizon.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Spacewalk</Text>
        <Text style = {styles.description}>Increase air control and reduce fall impacts with Horizon’s custom spacesuit.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Gravity Lift (Cooldown: 20s)</Text>
        <Text style = {styles.description}>Reverses the flow of gravity, lifting players upwards and boosting them outwards when they exit.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Black Hole (Cooldown: 3 min)</Text>
        <Text style = {styles.description}>Deploy NEWT to create a micro black hole that pulls players in towards it.</Text>
      </View>

   
 
    </ScrollView>
  </ImageBackground>
);}

function Fuse({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/fuse.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Grenadier</Text>
        <Text style = {styles.description}>Stack an extra grenade per inventory slot. Fire grenades farther, faster, and more accurately.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Knuckle Cluster (Cooldown: 20s, 2 charges)</Text>
        <Text style = {styles.description}>Launch a cluster bomb that continuously expels airburst explosives on impact.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>The Motherlode (Cooldown: 2 min)</Text>
        <Text style = {styles.description}>Launch a bombardment that encircles a target area in a wall of flame. All enemies inside that circle will be revealed for as long as they are trapped in the wall of flame.</Text>
      </View>    
 
    </ScrollView>
  </ImageBackground>
);}

function Valkyrie({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/valkyrie.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>VTOL Jets</Text>
        <Text style = {styles.description}>Valkyrie can engage a VTOL jetpack while in the air and player can switch between hold and toggle mode in the options menu.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Missile Swarm (Cooldown: 30s)</Text>
        <Text style = {styles.description}>Fire a swarm of mini-rockets that damage and disorient the enemy.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Skyward Dive (Cooldown: 3 min)</Text>
        <Text style = {styles.description}>Press once to prepare for launch. Teammates can interact with Valkyrie to join the launch. Press again to launch into the air and skydive.</Text>
      </View>
    </ScrollView>
  </ImageBackground>
);}

function Seer({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/seer.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Heart Seeker</Text>
        <Text style = {styles.description}>Hear and visualize the heartbeats of enemies within 75m when aiming down sights.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Focus of Attention (Cooldown: 30s)</Text>
        <Text style = {styles.description}>Summon micro-drones to emit a delayed blast that goes through walls interrupting and revealing enemies.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Exhibit (Cooldown: 2 min)</Text>
        <Text style = {styles.description}>Create a sphere of micro-drones that reveal the location of enemies moving quickly or firing their weapons within.</Text>
      </View>    
 
    </ScrollView>
  </ImageBackground>
);}

function Ash({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='strech' 
    source={require('./assets/ash.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Marked for Death</Text>
        <Text style = {styles.description}>Ash's map shows the location of recent deathboxes. Ash can use a deathbox to mark surviving attackers (once per box).</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Arc Snare (Cooldown: 25s)</Text>
        <Text style = {styles.description}>Throw a spinning snare that damages and tethers the first enemy that gets too close.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Phase Breach (Cooldown: 2 min)</Text>
        <Text style = {styles.description}>Tear open a one-way portal to a targeted location. Unlike Wraith's portal, which can be used from both ends; Ash's phase tear / phase breach can only be used from one end.</Text>
      </View>    
 
    </ScrollView>
  </ImageBackground>
);}

function Mad_Maggie({navigation}){
return(
    
    <ImageBackground style={[styles.imgBackground, {opacity:0.7}]} 
    resizeMode='cover' 
    source={require('./assets/mad_maggie.png')}>
        
    <ScrollView style = {styles.screenStyle}>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Passive</Text>
        <Text style = {styles.subHeading}>Warlord's Ire</Text>
        <Text style = {styles.description}>Temporarily highlight enemies you've damaged. Also, move faster with shotguns.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Tactical</Text>
        <Text style = {styles.subHeading}>Riot Drill (Cooldown: 22s)</Text>
        <Text style = {styles.description}>Fire a drill that attaches to an obstacle and burns enemies on the other side.</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.heading}>Ultimate</Text>
        <Text style = {styles.subHeading}>Wrecking Ball (Cooldown: 1.5 min)</Text>
        <Text style = {styles.description}>Throw a ball that releases speed-boosting pads and detonates near enemies.</Text>
      </View>
    </ScrollView>
  </ImageBackground>
);}

export { LegendStackScreen };

const styles = StyleSheet.create({

  screenStyle: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    padding: 10,
    
  },

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
  },
  
  container: {
    padding: 10,  
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "orangered"
  },

  subHeading: {
    fontSize: 19,
    fontWeight: "bold",
    color: "midnightblue"
  },


  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#000000'
  }

  
});