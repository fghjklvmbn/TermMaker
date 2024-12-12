import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용을 위해 필요

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginTop: 10,
    marginLeft: 30,

    width: 30,
    height: 30,
  }
});

export default BackButton;
