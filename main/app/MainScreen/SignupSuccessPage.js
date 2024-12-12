import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SignupSuccessPage = () => {
  const handleGoToLogin = () => {
    console.log('로그인 버튼 클릭됨'); // 버튼 클릭 시 동작
  };

  return (
    <View style={styles.container}>
      {/* 상단 제목 */}
      <Text style={styles.title}>ReTrack</Text>

      {/* 중앙 아래 메시지 */}
      <Text style={styles.message}>회원가입이 완료되었습니다!</Text>

      {/* 로그인 버튼 */}
      <TouchableOpacity onPress={handleGoToLogin} style={styles.button}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 36, // 제목 폰트 크기
    fontWeight: 'bold',
    marginTop: 150, // 상단에서 3칸 아래
  },
  message: {
    fontSize: 20, // 메시지 크기
    fontWeight: 'bold', // 볼드체로 설정
    textAlign: 'center',
    marginTop: '45%', // 중앙에서 더 아래로 이동
  },
  button: {
    backgroundColor: '#D9D9D9',
    width: '80%', // 버튼 너비
    paddingVertical: 15,
    borderRadius: 30, // 둥근 버튼 스타일
    alignItems: 'center',
    marginTop: 30, // 메시지와 버튼 사이 간격
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupSuccessPage;
