import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default function HeaderTop() {
  return (
    <LinearGradient style={styles.container} colors={['#282828', '#121212']}>
      <View style={styles.left}>
        <Text style={styles.text}>Abalaleli benyanga anbangu-166,307 </Text>
        <View style={styles.flex}>
          <View style={styles.albumBox}>
            <Text style={styles.albumName}>OBALANDELAYO</Text>
          </View>
          <Text style={styles.dots}>•••</Text>
        </View>
      </View>

      <View style={styles.right}>
        <View style={styles.iconPlay}>
          <Icons name={'play-arrow'} color={'white'} size={50} />
          <View style={styles.iconShuffle}>
            <FontAwesome
              style={{marginLeft: 1, marginTop: 1}}
              name={'random'}
              color={'#2faf68'}
              size={13}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
  },
  left: {
    flex: 3,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#999999',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
    fontFamily: 'CircularStd-Medium',
  },
  albumBox: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  albumName: {
    color: '#f7f7f7',
    paddingVertical: 9,
    paddingHorizontal: 11,
    fontSize: 14,
    borderWidth: 2,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    fontFamily: 'CircularStd-Medium',
  },
  dots: {
    flex: 1,
    color: '#a6a6a6',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 65,
    backgroundColor: '#1bb956',
    borderRadius: 90,
  },
  iconShuffle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
  },
});
