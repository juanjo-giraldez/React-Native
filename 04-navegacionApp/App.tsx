/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {Pagina1Screen} from './src/screens/pagina1Screen';
import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateralBasico />
    </NavigationContainer>
  );
};

export default App;
