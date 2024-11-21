import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MapPage = () => {
  const navigation = useNavigation();

  // "이전 화면" 버튼 클릭 시 동작
  const handleGoBack = () => {
    console.log("이전 화면으로 이동");
    // 나중에 다른 페이지로 이동할 수 있도록 구현
    // 예: navigation.navigate('OtherPage');
  };

  // 현재 위치 고정 버튼 클릭 시 동작
  const handleSetCurrentLocation = () => {
    console.log("현재 위치 고정");
    // 현재 위치 고정 동작을 구현할 수 있음 (추후 네이티브 기능으로 추가 예정)
  };

  // 휠체어 아이콘 클릭 시 대여 페이지로 이동
  const handleWheelchairIconPress = () => {
    navigation.navigate('Rantal'); // 'Rantal' 페이지로 이동
  };

  return (
    <View style={styles.container}>
    

      {/* 지도 영역 (추후 지도 추가) */}
      <View style={styles.mapContainer}></View>

      {/* 전동 휠체어 아이콘 (누르면 대여 페이지로 이동) */}
      <TouchableOpacity style={styles.wheelchairIcon} onPress={handleWheelchairIconPress}>
        <Text style={styles.iconText}>🚗</Text> {/* 휠체어 아이콘, 나중에 실제 아이콘으로 교체 가능 */}
      </TouchableOpacity>

      {/* 하단 버튼 영역 */}
      <View style={styles.buttonContainer}>
        {/* 이전 화면 버튼 */}
        <TouchableOpacity onPress={handleGoBack} style={styles.button}>
          <Text style={styles.buttonText}>이전 화면</Text>
        </TouchableOpacity>

        {/* 현재 위치 고정 버튼 */}
        <TouchableOpacity onPress={handleSetCurrentLocation} style={styles.button}>
          <Text style={styles.buttonText}>현재위치 고정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // 하단 버튼 영역을 맨 아래로 배치
    alignItems: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightgray', // 지도 공간의 배경 색
  },
  wheelchairIcon: {
    position: 'absolute',
    top: '50%', // 화면 중앙에 위치
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    fontSize: 40,
  },
  buttonContainer: {
    flexDirection: 'row', // 버튼들을 좌우 배치
    justifyContent: 'space-around', // 버튼 간격을 약간 벌림
    width: '100%',
    backgroundColor: '#e0e0e0', // 회색 배경
    paddingVertical: 10,
  },
  button: {
    backgroundColor: 'black', // 검은색 배경
    padding: 10,
    borderRadius: 20, // 둥근 모서리
    width: '40%', // 버튼의 너비
    alignItems: 'center', // 버튼 텍스트를 중앙 정렬
    marginVertical: 5,
  },
  buttonText: {
    color: 'white', // 흰색 텍스트
    fontSize: 16,
  },
  iconText: {
    fontSize: 40,
  },
});

export default MapPage;
