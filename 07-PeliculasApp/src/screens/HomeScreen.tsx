import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import movieDB from '../api/MovieDB';
import {MovieDBNowPlaying} from '../interface/movieInterface';

export const HomeScreen = () => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('now_playing').then(resp => {
      console.log(resp.data.results[0].title);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen </Text>
    </View>
  );
};
