import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {RooctStackParams} from '../navigator/StackNavigator';

// interface RouterParams {
//   id: number;
//   nombre: string;
// }

interface Props extends StackScreenProps<RooctStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouterParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  });
  // console.log('PEDRO', props);
  // console.log(JSON.stringify(props, null, 3));
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
