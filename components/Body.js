import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Song from './Song';

const uuid = require('uuidv4').default;

export default function Body() {
  const [songs, setSongs] = useState([
    {
      key: uuid(),
      tittle: "I'm Fine - INAMU Remix",
      streams: '823,428',
      image: 'assets/album_cover.png',
    },
    {key: uuid(), tittle: "I'm Fine", streams: '529,678', image: ''},
    {
      id: uuid(),
      tittle: '3 Words (feat. Leven Kali)',
      streams: '653,766',
      image: 'assets/album_cover.png',
    },
    {
      key: uuid(),
      tittle: 'Dojo (feat. TroiBoi)',
      streams: '363,448',
      image: 'assets/album_cover.png',
    },
    {
      key: uuid(),
      tittle: 'Ns Bounce',
      streams: '680,509',
      image: 'assets/album_cover.png',
    },
  ]);

  const renderItem = ({item}) => (
    <View>
      <Song song={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.album}>Okudumile</Text>
      </View>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={song => song.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.64,
    backgroundColor: '#121212',
  },
  album: {
    color: 'white',
    fontSize: 24,
    marginLeft: 20,
    fontWeight: 'bold',
    fontFamily: 'CircularStd-Bold',
    marginBottom: 20,
  },
  tittle: {},
});
