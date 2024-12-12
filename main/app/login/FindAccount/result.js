import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const find = ({ type, value, onLoginPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>당신의 {type}는</Text>
      <Text style={styles.mainText}>{value}</Text>
      <Text style={styles.subtitle}>입니다.</Text>
      <TouchableOpacity style={styles.button} onPress={onLoginPress}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 8,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: width * 0.3,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default find;