import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

const Renting = ({ route, navigation }) => {
  const [rentingTime, setRentingTime] = useState(0); // 대여 시간 (초 단위)
  const [currentAmount, setCurrentAmount] = useState(0); // 금액

  useEffect(() => {
    // 대여 시간 및 금액 업데이트
    const timer = setInterval(() => {
      setRentingTime((prev) => {
        const newTime = prev + 1; // 1초씩 증가
        if (newTime % 300 === 0) {
          setCurrentAmount((prevAmount) => prevAmount + 100); // 5분마다 100원 증가
        }
        return newTime;
      });
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 종료
    return () => clearInterval(timer);
  }, []);

  const handleReturn = () => {
    console.log('반납 버튼 눌림');
    navigation.navigate('Camera'); // 반납 후 Camera 페이지로 이동
  };

  return (
    <View style={styles.container}>
      {/* 지도 전체 화면 */}
      <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: 37.5665,
          longitude: 126.9780,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />

      {/* 하단 고정 정보 영역 */}
      <View style={styles.bottomContainer}>
        {/* 대여 시간 */}
        <Text style={styles.infoText}>
          대여 시간{'\n'}
          <Text style={styles.infoValue}>{Math.floor(rentingTime / 60)}분 {rentingTime % 60}초</Text>
        </Text>

        {/* 이동 거리와 금액 */}
        <View style={styles.rowContainer}>
          <Text style={styles.infoText}>
            이동 거리{'\n'}
            <Text style={styles.infoValue}>0.00m</Text>
          </Text>
          <Text style={styles.infoText}>
            현재 금액{'\n'}
            <Text style={styles.infoValue}>{currentAmount}원</Text>
          </Text>
        </View>

        {/* 반납 버튼 */}
        <TouchableOpacity style={styles.returnButton} onPress={handleReturn}>
          <Text style={styles.returnButtonText}>반납하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Renting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 5, // 지도 비율
  },
  bottomContainer: {
    flex: 2, // 하단 고정 공간 비율 확대
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 14, // 텍스트 크기
    color: '#333',
    textAlign: 'center',
  },
  infoValue: {
    fontSize: 16, // 값 텍스트 크기
    color: '#000',
  },
  returnButton: {
    backgroundColor: '#000',
    paddingVertical: 14, // 버튼 크기 확대
    borderRadius: 10,
    alignItems: 'center',
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
