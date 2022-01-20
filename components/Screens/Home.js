import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Banner from '../Banner';
import Header from '../Header';
import Body from '../Body';
import App from '../../App';

export default function Home({navigation}) {
  return <App />;
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 50,
  },
});
