import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.images}
        source={require('../assets/images/highklassified.png')}
      />
      <View style={styles.back}>
        <Icons name={'chevron-left'} size={35} color={'#fff'} />
      </View>

      <Text style={styles.header}>High Klassified</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    alignItems: 'center',
  },
  back: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: 40,
    left: 15,
    backgroundColor: 'grey',
    borderRadius: 35 / 2,
    opacity: 0.7,
  },
  images: {
    flex: 1,
    aspectRatio: 2.5,
    resizeMode: 'contain',
  },
  header: {
    color: 'white',
    position: 'absolute',
    fontSize: 52,
    bottom: 5,
    left: 15,
    fontFamily: 'CircularStd-Black',
    letterSpacing: -1,
  },
});
