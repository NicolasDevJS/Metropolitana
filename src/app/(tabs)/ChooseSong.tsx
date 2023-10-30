import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'

export default function ChooseSong() {
  const [songName, setSongName] = useState('');

  const handleSongNameChange = (text) => {
    setSongName(text);
  };

  const handleRequestSong = () => {
    console.log(`Pedido de música: ${songName}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#2727d6' }]}>
      <TextInput
        style={styles.input}
        placeholder="Nome da música"
        value={songName}
        onChangeText={handleSongNameChange}
      />

      <TouchableOpacity onPress={handleRequestSong} style={styles.button}>
        <Text style={{ color: 'white' }}>Pedir Música</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.buttonMenu} >
              </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 360,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    bottom: 230,
    backgroundColor:'white'
  },
  button: {
    backgroundColor: 'lightgray',
    width: 360,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
    bottom: 230,
  },
  buttonMenu: {
    backgroundColor: 'red', 
    borderRadius: 50, 
    padding: 20, 
    left: 6,
    top: 32,
    position: 'absolute',
  },
});

