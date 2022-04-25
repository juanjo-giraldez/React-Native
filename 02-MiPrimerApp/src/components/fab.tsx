import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}
export const Fab = ({title, onPress, position}: Props) => {
  const ios = () => {
  return (
        <View
          >
          <TouchableOpacity
          style={[
            styles.fabLocationIos,
            position === 'br' ? styles.buttonRight : styles.buttonLeft,
          ]}
            onPress={onPress}>
            <View style={styles.fab}>
              <Text style={styles.fabText}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };
  

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'br' ? styles.buttonRight : styles.buttonLeft,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocationIos: {
    position: 'absolute',
    bottom: -350,
  },
  fabLocation: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
  buttonRight: {
    right: 0,
    marginRight: 20,
  },
  buttonLeft: {
    left: 0,
    marginLeft: 20,
  },

  fab: {
    width: 60,
    height: 60,
    backgroundColor: '#5856D6',
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
