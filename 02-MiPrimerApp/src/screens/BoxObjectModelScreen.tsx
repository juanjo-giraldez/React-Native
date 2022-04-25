import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'red',
  },
  title: {
    paddingHorizontal:100,
    paddingVertical: 30,
    // padding: 50, 
    fontSize: 20,
    // width: 250, 
    borderWidth: 10
    // backgroundColor: 'red'
  },
});
