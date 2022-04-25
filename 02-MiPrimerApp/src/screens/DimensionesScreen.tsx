import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
