import * as React from 'react';
import { View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../screens/styles/styles';

const Footer = ({text}) => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.footer}>
                <Button title={text} onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    )
}

export default Footer;