import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function WebRadio() {

  return (
    <View style={[styles.container, { backgroundColor: '#2727d6' }]}>
      <View style={styles.row}>
        <TouchableOpacity>
          <Image
            source={require('../image/sertanejo.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../image/pop.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Image
            source={require('../image/mpb.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../image/light.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 185,
    height: 150,
    margin: 4,
    bottom: 140,
  },
});
