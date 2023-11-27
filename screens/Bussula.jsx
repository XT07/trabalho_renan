import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import Icon from 'react-native-vector-icons/FontAwesome';
 
const Compass = () => {
  const [gyroscopeData, setGyroscopeData] = useState({});
  const [currentDirection, setCurrentDirection] = useState('Sem direção');
  const [iconName, setIconName] = useState('compass');
 
  useEffect(() => {
    const subscription = Gyroscope.addListener((gyroscopeData) => {
      setGyroscopeData(gyroscopeData);
      calculateDirection(gyroscopeData);
    });
 
    return () => {
      subscription && subscription.remove();
    };
  }, []);
 
  const calculateDirection = ({ z }) => {
    if (z >= 2 && z < 4) {
      setCurrentDirection('Norte');
      setIconName('arrow-up');
    } else if (z <= -2 && z > -4) {
      setCurrentDirection('Sul');
      setIconName('arrow-down');
    } else if (z >= 4) {
      setCurrentDirection('Leste');
      setIconName('arrow-right');
    } else if (z <= -4) {
      setCurrentDirection('Oeste');
      setIconName('arrow-left');
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.directionText}>{currentDirection}</Text>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={100} color="#000000" />
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  directionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    borderWidth: 2,
    borderRadius: 100,
    padding: 20,
  },
});
 
export default Compass;