/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();
  console.log(
    'TITULO',
    peliculasEnCine[1]?.title,
    'POPULARITY',
    peliculasEnCine[1]?.popularity,
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
