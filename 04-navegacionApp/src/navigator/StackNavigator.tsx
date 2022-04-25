/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screen} from '../screens/pagina1Screen';
import {pagina2Screen} from '../screens/pagina2Screen';
import {pagina3Screen} from '../screens/pagina3Screen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen"
      
      screenOptions={{
        headerStyle:{
            elevation: 0,
            shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
      >
      <Stack.Screen name="Pagina1Screen" options={{ title:"Página 1"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{ title:"Página 2"}} component={pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{ title:"Página 3"}} component={pagina3Screen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
