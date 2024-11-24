import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location'; // expo-location 추가

const Renting = ({ route, navigation }) => {
  const [rentingTime, setRentingTime] = useState(0); // 대여 시간 (초 단위)
  const [currentAmount, setCurrentAmount] = useState(0); // 금액
  const [distance, setDistance] = useState(0); // 이동 거리
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 37.5665,
    longitude: 126.9780,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [locationPermission, setLocationPermission] = useState(null); // 위치 권한 상태
  const [userLocation, setUserLocation] = useState(null); // 사용자 위치

  useEffect(() => {
    // 위치 권한 요청
    const getLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status === 'granted');
    };

    getLocationPermission();

    // 대여 시간과 금액을 1초마다 증가
    const timer = setInterval(() => {
      setRentingTime((prev) => {
        const newTime = prev + 1; // 1초씩 증가
        if (newTime % 300 === 0) {
          setCurrentAmount((prevAmount) => prevAmount + 100); // 5분마다 100원 증가
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  useEffect(() => {
    if (locationPermission) {
      // 위치 정보 가져오기
      const getUserLocation = async () => {
        const { coords } = await Location.getCurrentPositionAsync();
        setUserLocation(coords); // 사용자 위치 정보 저장
        setCurrentRegion({
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      };

      getUserLocation();
    }
  }, [locationPermission]);

  const handleRegionChange = (region) => {
    setCurrentRegion(region);
    // 이동 거리 계산 (단순 예시: 실제 거리 계산은 더 복잡할 수 있음)
    const distanceTraveled = Math.sqrt(
      Math.pow(region.latitude - currentRegion.latitude, 2) + Math.pow(region.longitude - currentRegion.longitude, 2)
    );
    setDistance((prevDistance) => prevDistance + distanceTraveled);
  };

  const handleReturn = () => {
    console.log('반납 버튼 눌림');
    navigation.navigate('Camera'); // 반납 후 Camera 페이지로 이동
  };

  if (!locationPermission) {
    return (
      <View style={styles.container}>
        <Text>위치 권한이 필요합니다. 권한을 허용해 주세요.</Text>
      </View>
    );
  }

  if (!userLocation) {
    return (
      <View style={styles.container}>
        <Text>위치를 가져오는 중...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* 지도 화면 */}
      <MapView
        style={styles.mapContainer}
        region={currentRegion} // 현재 지역 반영
        onRegionChangeComplete={handleRegionChange} // 지역 변경 시 호출
        showsUserLocation={true} // 사용자 위치 표시
        followsUserLocation={true} // 사용자 위치를 따라가기
      />

      {/* 하단 고정 정보 영역 */}
      <View style={styles.bottomContainer}>
        {/* 대여 시간 */}
        <Text style={styles.infoText}>
          대여 시간: <Text style={styles.infoValue}>{Math.floor(rentingTime / 60)}분 {rentingTime % 60}초</Text>
        </Text>

        {/* 이동 거리와 금액 */}
        <View style={styles.rowContainer}>
          <Text style={styles.infoText}>
            이동 거리: <Text style={styles.infoValue}>{distance.toFixed(2)}m</Text>
          </Text>
          <Text style={styles.infoText}>
            현재 금액: <Text style={styles.infoValue}>{currentAmount}원</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 5,
  },
  bottomContainer: {
    flex: 2,
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
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  infoValue: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold', // 글씨체 굵게 설정
  },
  returnButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Renting;
