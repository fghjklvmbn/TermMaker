import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BluetoothGuide = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState('');

  const enableBluetooth = async () => {
    // 블루투스 활성화 코드 추가 (현재는 로직 비활성화)
    setErrorMsg('');
    alert('블루투스가 활성화되었습니다.');

    // 블루투스가 활성화된 후, 위치 정보가 활성화되었으면 MapPage로 이동
    navigation.navigate('MapPage');
  };

  return (
    <View style={styles.container}>
      <Ionicons name="bluetooth-outline" size={64} color="gray" />
      <Text style={styles.title}>블루투스가 비활성화 상태입니다.</Text>
      <Button title="블루투스 켜기" onPress={enableBluetooth} />
      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginVertical: 16,
    color: '#333',
  },
  error: { color: 'red', marginTop: 8 },
});

export default BluetoothGuide;
