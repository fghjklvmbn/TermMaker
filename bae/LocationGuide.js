import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const LocationGuide = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState('');

  const enableLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('위치 권한을 허용해야 합니다.');
      return;
    }
    setErrorMsg('');
    alert('위치정보가 활성화되었습니다.');

    // 위치 정보가 활성화된 후, 블루투스가 활성화되어 있으면 MapPage로 이동
    navigation.navigate('MapPage');
  };

  return (
    <View style={styles.container}>
      <Ionicons name="location-outline" size={64} color="gray" />
      <Text style={styles.title}>위치정보가 비활성화 상태입니다.</Text>
      <Button title="위치정보 켜기" onPress={enableLocation} />
      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 18, marginVertical: 16, color: '#333' },
  error: { color: 'red', marginTop: 8 },
});

export default LocationGuide;