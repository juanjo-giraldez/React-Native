/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras',
    });
  });
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>pagina2Screen</Text>

      <Button
        title="Ir a página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />

      <Button
        title="Ir a página 1"
        onPress={() => navigator.navigate('Pagina1Screen')}
      />
    </View>
  );
};
function useEfect(arg0: () => void) {
  throw new Error('Function not implemented.');
}
