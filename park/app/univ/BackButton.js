import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require('../../assets/back_icon.png')} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: 'absolute', // BackButton 자체의 절대 위치
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default BackButton;