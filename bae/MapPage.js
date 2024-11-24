import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import RentalStart from './RentalStart'; // RentalStart 임포트
import Rental from './Rental'; // Rental 임포트
import ReturnConfirmation from './ReturnConfirmation'; // ReturnConfirmation 임포트

const MapPage = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isRentalVisible, setIsRentalVisible] = useState(false); // Rental 페이지 표시 여부 상태
  const [isReturnConfirmationVisible, setIsReturnConfirmationVisible] = useState(false); // ReturnConfirmation 표시 여부

  useEffect(() => {
    (async () => {
      // 위치 권한 요청
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('위치 액세스 권한이 거부되었습니다.');
        return;
      }

      // 현재 위치 가져오기
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>위치를 가져오는 중...</Text>
      </View>
    );
  }

  // 휠체어 임의 위치 (현재 위치에서 가까운 위치로 설정)
  const wheelchairLocation = {
    latitude: location.coords.latitude + 0.001, // 현재 위치에서 약간 북쪽
    longitude: location.coords.longitude + 0.001, // 현재 위치에서 약간 동쪽
  };

  return (
    <View style={styles.container}>
      {/* 지도 컴포넌트 */}
      <MapView
        style={styles.map}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* 현재 위치 마커 */}
        <Marker
          coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
          title="내 위치"
          description="현재 위치"
        />

        {/* 휠체어 아이콘 마커 */}
        <Marker
          coordinate={wheelchairLocation}
          title="휠체어 위치"
          description="임의의 휠체어 위치"
          pinColor="blue" // 아이콘 색상
          onPress={() => setIsRentalVisible(true)} // 휠체어 아이콘 클릭 시 Rental 페이지 표시
        />
      </MapView>

      {/* 지도 하단에 RentalStart만 보이게 하기 */}
      {!isRentalVisible && !isReturnConfirmationVisible && (
        <View style={styles.overlay}>
          <RentalStart navigation={navigation} />
        </View>
      )}

      {/* Rental 페이지가 보일 때는 Rental만 표시 */}
      {isRentalVisible && (
        <View style={styles.rentalContainer}>
          <Rental 
            navigation={navigation} 
            closeRental={() => setIsRentalVisible(false)} // 화면 닫기 버튼 클릭 시 상태 변경
          />
        </View>
      )}

      {/* ReturnConfirmation 페이지가 보일 때는 지도 어두워지고, 하단에 반투명한 검은색 오버레이 표시 */}
      {isReturnConfirmationVisible && (
        <View style={styles.overlayBlack}>
          <ReturnConfirmation />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1, // 지도는 전체 화면을 차지하도록 설정
  },
  overlay: {
    position: 'absolute',
    bottom: 0, // 하단에 고정
    left: 0,
    right: 0,
    zIndex: 1, // 지도 위에 오버레이로 보이도록 설정
  },
  rentalContainer: {
    position: 'absolute',
    bottom: 0, // 화면 하단에 고정
    left: 0,
    right: 0,
    backgroundColor: 'white', // 배경 색상 설정
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2, // Rental 페이지가 지도 위로 올라오게 설정
    height: '30%', // Rental 페이지가 화면 하단 30%만 차지하도록 설정
  },
  overlayBlack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명한 검은색 오버레이
    zIndex: 3, // 렌더링 순서 조정
  },
});

export default MapPage;
