// ReturnConfirmation.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReturnConfirmation = ({ navigation }) => {
  // 확인 버튼 클릭 시 MapPage로 이동
  const handleConfirm = () => {
    navigation.navigate('MapPage'); // 지도 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>반납 확인</Text>

      {/* 지도 컴포넌트 (네이티브 지도를 추가할 때는 여기 수정) */}
      <View style={styles.mapContainer}>
        <Text>지도 (이곳에 지도가 표시됩니다)</Text>
      </View>

      {/* 반납 완료 메시지 */}
      <Text style={styles.text}>반납이 완료되었습니다.</Text>

      {/* 확인 버튼 */}
      <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ReturnConfirmation;
