import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function RentalStart({ onSetCurrentLocation }) {
  return (
    <View style={styles.container}>
      {/* 하단 불투명 회색 배경 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.button, styles.leftButton]}>
          <Text style={styles.buttonText}>이전화면으로</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.rightButton]}
          onPress={onSetCurrentLocation} // 버튼 클릭 시 현재 위치로 이동
        >
          <Text style={styles.buttonText}>현재 위치 고정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // 하단에 배치
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomContainer: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // 연한 불투명 회색 배경
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  leftButton: {
    alignSelf: 'flex-start',
  },
  rightButton: {
    alignSelf: 'flex-end',
  },
});
