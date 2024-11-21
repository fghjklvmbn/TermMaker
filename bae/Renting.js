import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Renting = ({ route, navigation }) => {
  // 예시 데이터를 state로 관리
  const [rentingTime, setRentingTime] = useState(0); // 대여 시간 (초 단위)
  const [distance, setDistance] = useState(0); // 이동 거리 (예시, 실제 거리 계산은 추가 필요)

  const [currentAmount, setCurrentAmount] = useState(0); // 금액 (예시, 실제 계산 필요)

  useEffect(() => {
    // 대여 시간 계산 (초 단위)
    const timer = setInterval(() => {
      setRentingTime(prevTime => prevTime + 1); // 1초마다 증가
    }, 1000);

    // 예시로 1초마다 이동 거리 및 금액을 업데이트(나중에 수정)
    const distanceTimer = setInterval(() => {
      setDistance(prevDistance => prevDistance + 0.1); // 예시로 0.1m씩 증가
      setCurrentAmount(prevAmount => prevAmount + 10); // 예시로 10원씩 증가
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 종료
    return () => {
      clearInterval(timer);
      clearInterval(distanceTimer);
    };
  }, []); // 빈 배열을 주어 컴포넌트 마운트 시 한 번만 실행되도록 설정

  // 대여 종료 및 반납 버튼 클릭 시 화면 전환
  const handleReturn = () => {
    // 반납 처리 로직 추가 후, 다른 페이지로 이동
    navigation.navigate('Camera'); // 예시: 대여 완료 후 Camera로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>대여 중</Text>
      
      {/* 지도 컴포넌트 (네이티브 지도를 추가할 때는 여기 수정) */}
      <View style={styles.mapContainer}>
        <Text>지도 (이곳에 지도가 표시됩니다)</Text>
      </View>

      {/* 대여 시간 */}
      <Text>대여 시간: {Math.floor(rentingTime / 60)}분 {rentingTime % 60}초</Text>

      {/* 현재 간 거리 */}
      <Text>현재 간 거리: {distance.toFixed(2)}m</Text>

      {/* 현재 금액 */}
      <Text>현재 금액: {currentAmount}원</Text>

      {/* 반납하기 버튼 */}
      <TouchableOpacity onPress={handleReturn} style={styles.returnButton}>
        <Text style={styles.buttonText}>반납하기</Text>
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
  returnButton: {
    backgroundColor: 'black', // 검은색 배경
    padding: 10,
    borderRadius: 20, // 둥근 모서리
    marginTop: 20,
    width: '80%',
    alignItems: 'center', // 텍스트 중앙 정렬
  },
  buttonText: {
    color: 'white', // 흰색 텍스트
    fontSize: 16,
  },
});

export default Renting;
