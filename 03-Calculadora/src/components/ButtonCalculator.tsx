/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {styles} from '../theme/appTheme';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}
const ButtonCalculator = ({
  text,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonCalculator;
