// Rantal.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Rantal = ({ navigation }) => {
  const [model, setModel] = useState('전동 휠체어 모델 A');
  const [price, setPrice] = useState(5000); // 예시 금액 (원)
  const [imageUri, setImageUri] = useState('https://example.com/wheelchair.jpg'); // 예시 이미지 URL

  const handleRent = () => {
    // 대여하기 버튼 클릭 시 Renting 페이지로 이동
    navigation.navigate('Renting');
  };

  const handleReport = () => {
    // 신고 버튼 클릭 시 신고 처리 (추후 추가 기능 구현)
    alert('신고 기능은 아직 구현되지 않았습니다.');
  };

  const handleClose = () => {
    // 화면 닫기 버튼 클릭 시 MapPage로 이동
    navigation.navigate('MapPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>대여 선택 및 요금 화면</Text>
      
      {/* 지도 컴포넌트 (네이티브 지도를 추가할 때는 여기 수정) */}
      <View style={styles.mapContainer}>
        <Text>지도 (이곳에 지도가 표시됩니다)</Text>
      </View>

      {/* 전동 휠체어 위치 아이콘 (버튼으로 대체) */}
      <TouchableOpacity onPress={handleRent} style={styles.wheelchairButton}>
        <Text style={styles.buttonText}>전동 휠체어 위치 아이콘</Text>
      </TouchableOpacity>

      {/* 요금 */}
      <Text style={styles.text}>요금: {price}원</Text>

      {/* 모델명 */}
      <Text style={styles.text}>모델명: {model}</Text>

      {/* 신고 버튼 */}
      <TouchableOpacity onPress={handleReport} style={styles.reportButton}>
        <Text style={styles.buttonText}>신고하기</Text>
      </TouchableOpacity>

      {/* 사진 출력 */}
      <Image source={{ uri: imageUri }} style={styles.image} />

      {/* 화면 닫기 버튼 */}
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Text style={styles.buttonText}>화면 닫기</Text>
      </TouchableOpacity>

      {/* 대여하기 버튼 */}
      <TouchableOpacity onPress={handleRent} style={styles.rentButton}>
        <Text style={styles.buttonText}>대여하기</Text>
      </TouchableOpacity>
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
  mapContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheelchairButton: {
    backgroundColor: '#3b5998',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  reportButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  closeButton: {
    backgroundColor: '#999',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  rentButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
});

export default Rantal;
