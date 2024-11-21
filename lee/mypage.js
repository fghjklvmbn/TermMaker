import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const handlePress = async (action) => {
    try {
      // Express.js 서버로 요청 보내기
      const response = await fetch('http://localhost:8081', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action }),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert('Success', result.message);
      } else {
        Alert.alert('Error', 'Something went wrong.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>설정 및 마이페이지</Text>
      {['개인정보관리', '결제수단', '프로필 변경', '고객센터', '로그아웃'].map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.button}
          onPress={() => handlePress(item)}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => handlePress('회원탈퇴')}
      >
        <Text style={styles.footerText}>회원탈퇴</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 33, // 기존보다 크게
    fontWeight: 'bold',
    marginBottom: 90,
  },
  button: {
    width: '70%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  footerButton: {
    marginTop: 80,
    alignSelf: 'flex-end',
    paddingRight: 15, // 오른쪽 여백 추가 (옵션)
  },
  footerText: {
    fontSize: 14,
    color: 'red', // 텍스트 색상 빨간색
    textDecorationLine: 'underline', // 텍스트 밑줄 추가
  },
});

export default App;