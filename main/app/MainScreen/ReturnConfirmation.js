import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReturnConfirmation = () => {
  const navigation = useNavigation();

  // 반납 확인 후 MainScreen으로 이동
  const handleReturnConfirmation = () => {
    navigation.navigate('MainScreen'); // MainScreen으로 이동
  };

  return (
    <View style={styles.container}>
      {/* 전체 화면을 덮는 불투명 검은색 레이어 */}
      <View style={styles.overlayBlack} />

      {/* 회색 공간 위로 내용 표시 */}
      <View style={styles.overlayBottom}>
        <Text style={styles.title}>반납이 완료되었습니다.</Text>

        {/* 확인 버튼 (TouchableOpacity로 수정) */}
        <TouchableOpacity style={styles.button} onPress={handleReturnConfirmation}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayBlack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // 전체 화면을 덮는 불투명 검은색
    zIndex: 2,
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(169, 169, 169, 1)', // 불투명 회색
    height: '30%', // 하단 30%에 회색 공간
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20, // 내용 간격 조정
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white', // 흰색 배경
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black', // 검은색 테두리
  },
  buttonText: {
    color: 'black', // 검은색 텍스트
    fontSize: 18,
  },
});

export default ReturnConfirmation;