import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import RentalStart from './RentalStart';
import Rental from './Rental';
import ReturnConfirmation from './ReturnConfirmation';

const MapPage = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isRentalVisible, setIsRentalVisible] = useState(false);
  const [isReturnConfirmationVisible, setIsReturnConfirmationVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('위치 액세스 권한이 거부되었습니다.');
        return;
      }

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

  const wheelchairLocation = {
    latitude: location.coords.latitude + 0.001,
    longitude: location.coords.longitude + 0.001,
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
          <RentalStart navigation={navigation} />
        </View>
      )}

      {isRentalVisible && (
        <View style={styles.rentalContainer}>
          <Rental 
            navigation={navigation} 
            closeRental={() => setIsRentalVisible(false)} 
          />
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
});

export default MapPage;
