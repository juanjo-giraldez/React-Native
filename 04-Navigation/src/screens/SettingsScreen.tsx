import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../../../05-Navigation(Botton-Top)/src/context/AuthContext';
import { Screen } from 'react-native-screens';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    const {AuthState} = useContext(AuthContext);

    context.

    return (
        <View style={{ 
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={ styles.title }>Settings Screen</Text>
            <Text>Hola</Text>
        </View>
    )
}


