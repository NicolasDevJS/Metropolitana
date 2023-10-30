import React from 'react';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
          source={require('../image/logo.png')}
          style={styles.imageBackground}
          >
            <TouchableOpacity style={styles.buttonMenu}></TouchableOpacity>
            <Image source={require('../image/musica.png')}
              style={styles.imageStyle}/>

            <View style={styles.square}>
            <AntDesign name="dislike1" size={40} color="white" style={{ position: 'absolute', top: 20, left: 20 }} />
            <AntDesign name="like1" size={40} color="white" style={{ position: 'absolute', top: 20, left: 80 }} />
            <TouchableOpacity style={styles.button}>
            <Entypo name="share" size={30} color="white" />
            </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity  style={styles.buttonFooter} >
              <FontAwesome name="play" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
   imageBackground:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
   },
   imageStyle:{
    width: 330,
    height: 350,
    position: 'absolute',
    top: 200,
   },
   square: {
    width: 330,
    height: 80,
    elevation: 5,
    top: 210,
    backgroundColor: "#000000"
   },
    button: {
    backgroundColor: 'red', 
    borderRadius: 50, 
    padding: 15, 
    right: 8,
    top: 8,
    position: 'absolute',
  },
  buttonFooter: {
    backgroundColor: 'red', 
    borderRadius: 50, 
    padding: 18, 
    left: 15,
    top: 8,
    position: 'absolute',
  },
  buttonMenu: {
    backgroundColor: 'red', 
    borderRadius: 50, 
    padding: 20, 
    left: 6,
    top: 32,
    position: 'absolute',
  },
  footer: {
    width: 400,
    height: 70,
    elevation: 5,
    bottom: -1,
    position: 'absolute',
    backgroundColor: "#000000"
   },
});

