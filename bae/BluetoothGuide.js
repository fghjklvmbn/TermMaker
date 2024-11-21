import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BluetoothGuide = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // 블루투스가 켜졌는지 체크 (현재는 임시로 true로 설정)
    const isBluetoothEnabled = true; // 나중에 실제 블루투스 상태로 변경 필요

    if (isBluetoothEnabled) {
      // 블루투스가 켜져 있으면 LocationGuide로 자동 이동
      navigation.navigate('LocationGuide');
    }
  }, [navigation]);

  const handleBluetoothEnable = () => {
    // 블루투스 켜기 로직 (현재는 알림만 처리)
    alert('블루투스를 켰습니다');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>블루투스가 비활성화 상태입니다.</Text>
      <Button title="블루투스 켜기" onPress={handleBluetoothEnable} />
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

export default BluetoothGuide;
