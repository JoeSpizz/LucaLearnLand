import { View, Pressable, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useEffect, useState } from 'react';
import Truck from './Button';
import Button from './Button';
import { Ionicons } from '@expo/vector-icons';



function Title({navigation}) {
  const [popMessageVisible, setPopMessageVisible] = useState(false);

  const handlePress = () => {
    setPopMessageVisible(true);
  }
  const handleClose = () => {
    setPopMessageVisible(false);
  }
  const email = () =>{
    Linking.openURL('mailto:LucaLearnLand@gmail.com')
  }
    
   
  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity style={styles.betaIcon} onPress={handlePress}>
        <Ionicons name="ios-settings-sharp" size={50} color="black" />
      </TouchableOpacity>
      <Modal
        visible={popMessageVisible}
        animationType="slide"
        onRequestClose={handleClose}
      >
        <View style={styles.betaPopBox}>
      <Text style={styles.betaPopTextHead}>Hello Parents!</Text>
      <Text style={styles.betaPopText}>Thank you for helping me alpha test Luca's Learn Land! This app is a passion project of mine and it's only just begun. It feels a bit empty now, but this app will grow even past it's official launch to one day include learning games for kids 1-5.</Text>
      <Text style={styles.betaPopText}>As I mentioned this is the ALPHA test of this app. There are likely bugs and oddities you will encounter. I encourage you to email me directly at <Text style={styles.betaEmail} onPress={email}>LucaLearnLand@gmail.com</Text> with questions, comments, concerns, suggestions, hopes/fears, etc. </Text>
      <Text style={styles.betaPopText}>Thanks again for being part of the creation of this app!</Text>
      <TouchableOpacity onPress={handleClose}>
        <Text style={styles.betaPopClose}>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
    <Pressable style={styles.button} >
    <Text style={styles.text}>Luca's Learn</Text>
      <Text style={styles.text}>Land!</Text>
    </Pressable>
    <Truck label="ABC's" nav="Letters" navigation={navigation}/>
      <Truck label = "123's" nav="Numbers" navigation={navigation}/>
      {/* <Truck label = "Colors" nav="Colors" navigation={navigation}/> */}
      <Truck label = "Animals" nav="Animals" navigation={navigation}/>
  </View>
  )
}

export default Title
const styles = EStyleSheet.create({
  betaIcon:{
    position: "absolute",
    left:0,
    top: 100
  },
  betaPopBox:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  betaPopTextHead:{
    color: 'purple', marginBottom:10,
    fontSize: '2.5rem'
  },
  betaPopText:{
    fontWeight: 'bold',
    fontSize: '1.3 rem',
    lineHeight: 30
  },
  betaEmail:{
    color: 'purple',
    fontSize: '1.3rem'
  },
  betaPopClose:{
    color: 'blue',
    fontSize: '2rem',
    marginTop: 10
  },
    titleContainer:{
        backgroundColor: 'yellow',
        alignItems:'center',
        justifyContent: 'space-around',
        height: '100%'
    },
text:{
    color: 'red',
    fontSize: 50,
    fontWeight: "bold",
    alignItems:'center',
    textAlign:'center',
  },
  smallText:{
    fontSize: 20,
    color: 'orange',
    marginTop: -10,
    marginBottom: -15,
    fontWeight: 'bold',
    alignItems:'center',
    textAlign:'center',
  },
  button:{
    marginTop: 30
  }
})