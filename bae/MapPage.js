import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const MapPage = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // 위치 정보 가져오기
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    };

    getLocation();
  }, []);

  // 위치가 없다면 로딩 메시지 표시
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.latitude}, Longitude: ${location.longitude}`;
  }

  return (
    <View style={styles.container}>
      {/* 지도 표시 */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location ? location.latitude : 37.7749, // 위치가 없으면 기본값
          longitude: location ? location.longitude : -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* 위치 마커 표시 */}
        {location && (
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="현재 위치"
            description={`위도: ${location.latitude}, 경도: ${location.longitude}`}
          />
        )}
      </MapView>

      {/* 위치 정보 텍스트 */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{text}</Text>
      </View>

      {/* 버튼들 */}
      <View style={styles.buttonContainer}>
        <Button title="이전 화면으로" onPress={() => navigation.goBack()} />
        <Button title="현재 위치 고정" onPress={() => alert('현재 위치 고정 기능')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '60%',
  },
  locationContainer: {
    marginTop: 20,
  },
  locationText: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MapPage;
