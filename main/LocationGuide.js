import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LocationGuide = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const isLocationEnabled = true; // 임시로 위치가 활성화된 것으로 설정

    if (isLocationEnabled) {
      navigation.navigate('MapPage'); // 위치 정보가 켜져 있으면 MapPage로 자동 이동
    }
  }, [navigation]);

  const handleLocationEnable = () => {
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
