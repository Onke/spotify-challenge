import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import Banner from './components/Banner';
import Header from './components/Header';
import Body from './components/Body';
import BottomNavBar from './components/BottomNavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Banner />
      <Header />
      <Body />
      {/* <BottomNavBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
