import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LocationGuide = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // 위치정보가 켜졌는지 체크 (현재는 임시로 true로 설정)
    const isLocationEnabled = true; // 나중에 실제 위치 정보 상태로 변경 필요

    if (isLocationEnabled) {
      // 위치정보가 켜져 있으면 MapPage로 자동 이동
      navigation.navigate('MapPage');
    }
  }, [navigation]);

  const handleLocationEnable = () => {
    // 위치 정보 켜기 로직 (현재는 알림만 처리)
    alert('위치 정보를 켰습니다');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>위치 정보가 비활성화 상태입니다.</Text>
      <Button title="위치 정보 켜기" onPress={handleLocationEnable} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default LocationGuide;
