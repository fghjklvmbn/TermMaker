import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Rental from './Rental';
import ReturnConfirmation from './ReturnConfirmation';
import axios from 'axios';

const RentalStart = ({ navigation }) => {
  const [location, setLocation] = useState(null); // 위치 상태
  const [errorMsg, setErrorMsg] = useState(null);
  const [isRentalVisible, setIsRentalVisible] = useState(false);
  const [isReturnConfirmationVisible, setIsReturnConfirmationVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync(); // 위치 권한 요청
      if (status !== 'granted') {
        setErrorMsg('위치 액세스 권한이 거부되었습니다.');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({}); // 현재 위치 가져오기
      setLocation(currentLocation); // 위치 상태 업데이트
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

  const wheelchairLocation = async() => {

    const response = await axios.post("http://localhost:3000/api/wheelchair/location");

    // axios 추가
    latitude = response.latitude;
    longitude = response.longitude;
  
  };

  // 현재 위치 고정 기능
  const handleSetCurrentLocation = () => {
    setLocation(location); // 실제로 위치를 고정하는 로직은 여기서 구현해야 함
  };

  // 이전 화면으로 가기
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true} // 사용자 위치를 지도에 표시
      >
        <Marker
          coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
          title="내 위치"
          description="현재 위치"
        />
        <Marker
          coordinate={wheelchairLocation}
          title="휠체어 위치"
          description="임의의 휠체어 위치"
          pinColor="blue"
          onPress={() => setIsRentalVisible(true)} // 휠체어 클릭 시
        />
      </MapView>

      {!isRentalVisible && !isReturnConfirmationVisible && (
        <View style={styles.overlay}>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={[styles.button, styles.leftButton]} onPress={handleGoBack}>
              <Text style={styles.buttonText}>이전화면으로</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.rightButton]}
              onPress={handleSetCurrentLocation} // 버튼 클릭 시 현재 위치로 이동
            >
              <Text style={styles.buttonText}>현재 위치 고정</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {isRentalVisible && (
        <View style={styles.rentalContainer}>
          <Rental navigation={navigation} closeRental={() => setIsRentalVisible(false)} />
        </View>
      )}

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
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  rentalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
    height: '30%',
  },
  overlayBlack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 3,
  },
  bottomContainer: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // 연한 불투명 회색 배경
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  leftButton: {
    alignSelf: 'flex-start',
  },
  rightButton: {
    alignSelf: 'flex-end',
  },
});

export default RentalStart;

