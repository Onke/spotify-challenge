import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

let counter = 0;
let image = '';

const Song = props => {
  counter++;
  counter = counter % 5;
  image = props.song.image;
  return (
    <View style={styles.container}>
      <View style={styles.number}>
        <Text style={styles.tittle}>{counter}</Text>
      </View>
      <Image
        style={styles.image}
        source={require('../assets/images/album_cover.png')}></Image>
      <View style={styles.texts}>
        <Text style={styles.tittle}>{props.song.tittle}</Text>
        <Text style={styles.streams}>{props.song.streams}</Text>
      </View>
      <Text style={styles.icon}>•••</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  number: {
    margin: 10,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'CircularStd-Medium',
  },
  image: {
    width: 65,
    height: 65,
    backgroundColor: 'grey',
  },
  texts: {
    marginLeft: 20,
  },

  tittle: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'CircularStd-Medium',
  },
  streams: {
    color: '#8d8d8d',
    fontSize: 18,
    fontFamily: 'CircularStd-Book',
  },
  icon: {
    right: 20,
    color: 'grey',
    fontSize: 18,
    position: 'absolute',
  },
});

export default Song;
