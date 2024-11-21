// Camera.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ReturnConfirmation from './ReturnConfirmation';

const Camera = ({ navigation }) => {
  // "X" 버튼 클릭 시 화면 닫기 (Renting 화면으로 돌아감)
  const handleClose = () => {
    navigation.goBack(); // 이전 화면으로 돌아가기
  };

  // 사진 아이콘 클릭 시 사진 찍기 (기능 생략, 사진을 찍었다고 가정)
  const handleTakePhoto = () => {
     navigation.navigate(ReturnConfirmation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>반납 인증</Text>
      
      {/* 사진 아이콘 (실제로는 클릭하면 촬영을 시작하는 버튼) */}
      <TouchableOpacity onPress={handleTakePhoto} style={styles.photoButton}>
        <Text style={styles.buttonText}>📸</Text>
      </TouchableOpacity>

      {/* "X" 버튼 클릭 시 반납 인증 화면 종료 */}
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>

      {/* 사진 미리보기 (사진을 찍었다고 가정하여 표시) */}
      <Image source={{ uri: 'https://example.com/photo.jpg' }} style={styles.preview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  photoButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  preview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default Camera;
