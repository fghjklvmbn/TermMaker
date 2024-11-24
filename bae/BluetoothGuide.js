import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// 예시로 Bluetooth 상태를 확인하는 함수 (라이브러리 필요)
const checkBluetooth = async () => {
  // 여기에 Bluetooth 상태를 확인하는 실제 코드 작성
  // 예시로 true를 반환 (Bluetooth 활성화 상태)
  return true;
};

const BluetoothGuide = () => {
  const navigation = useNavigation();
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);

  useEffect(() => {
    const checkBluetoothStatus = async () => {
      const isBluetoothEnabled = await checkBluetooth();
      setBluetoothEnabled(isBluetoothEnabled);
      if (isBluetoothEnabled) {
        navigation.navigate('LocationGuide');
      } else {
        Alert.alert('Bluetooth 비활성화', 'Bluetooth를 활성화해 주세요.');
      }
    };

    checkBluetoothStatus();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Bluetooth가 활성화되어야 합니다.</Text>
      <Button
        title="Bluetooth 설정"
        onPress={() => {
          // Bluetooth 설정으로 이동하는 로직 (예시)
          // 이 부분은 실제 Bluetooth 설정으로 이동하는 코드로 구현해야 합니다.
          Alert.alert('Bluetooth 설정 화면으로 이동');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BluetoothGuide;
