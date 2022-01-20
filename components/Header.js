import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderBottom from './Header/HeaderBottom';
import HeaderTop from './Header/HeaderTop';

export default function Header() {
  return (
    <View style={styles.container}>
      <HeaderTop />
      <HeaderBottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.8,
  },
});
