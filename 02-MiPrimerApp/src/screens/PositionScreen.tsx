/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { StyleSheet, TouchableWithoutFeedbackBase, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
    <View style= {styles.cajaMorada} />
    <View style= {styles.cajaNaranja} />
    <View style= {styles.cajaGreen} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#28C4D9',
        // justifyContent: 'center', 
        // alignItems: 'center',
        width: 400,
        height: 400,
    },
    cajaMorada : {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10, 
        borderColor: 'white',
        position: 'absolute',
       right: 0
        
    },
    cajaNaranja : {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10, 
        borderColor: 'white', 
        bottom: 0,
        // left: 300,
        position: 'absolute',
        right: 0,
        
    },
    cajaGreen : {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10, 
        borderColor: 'white', 
      
        // left: 300,
        position: 'absolute',
        bottom:0
      
        
    }
});
