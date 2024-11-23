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
      {/* 지도 컴포넌트 (현재는 placeholder로 표시) */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapPlaceholder}>지도 (이곳에 지도가 표시됩니다)</Text>
      </View>

      {/* 하단 반납 완료 문구 및 버튼 */}
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>반납이 완료되었습니다.</Text>
        <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0', // 지도 placeholder 배경색
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    fontSize: 18,
    color: '#888',
  },
  bottomContainer: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ReturnConfirmation;
