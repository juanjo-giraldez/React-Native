import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaNuevoComponente = () => {
  return <View style={styles.container}>
<View style={styles.cajaMorada} />
<View style={styles.cajaNaranja} />
<View style={styles.cajaAzul} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425D',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor:'white',
    backgroundColor:'red'
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor:'white',
    backgroundColor:'#F0A23B'
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor:'white',
    backgroundColor:'#28C4D9'
  }
});
 