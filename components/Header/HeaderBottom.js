import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function HeaderBottom() {
  return (
    <View style={styles.container}>
      <View style={styles.imageIcon}>
        <Image
          style={styles.image}
          source={require('../../assets/images/highklassified.png')}
        />
        <View style={styles.iconHeart}>
          <FontAwesome name={'heart'} size={15} color={'white'} />
        </View>
      </View>

      <View style={styles.texts}>
        <Text style={styles.title}>Izingoma Ezithandiwe</Text>
        <Text style={styles.subtitle}>5 izingoma • High Klassified</Text>
      </View>

      <View style={styles.leftArrow}>
        <AntDesign name={'right'} color={'#949494'} size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'flex-start',
    marginTop: 25,
  },
  imageIcon: {
    width: 60,
    height: 60,
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  iconHeart: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#1fb454',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#0f1413',
  },
  texts: {
    marginLeft: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'CircularStd-Medium',
  },
  subtitle: {
    color: 'grey',
    fontSize: 16,
    fontFamily: 'CircularStd-Medium',
  },
  leftArrow: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 20,
    marginTop: 10,
  },
});
