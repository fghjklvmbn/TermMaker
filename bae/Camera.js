import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Camera = () => {
  const navigation = useNavigation();

  const handleCapture = () => {
    // 촬영 후 ReturnConfirmation 페이지로 이동
    navigation.navigate('ReturnConfirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>카메라</Text>

      {/* 촬영 버튼 */}
      <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
        <Text style={styles.buttonText}>촬영</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Camera;
