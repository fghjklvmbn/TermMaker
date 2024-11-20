import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const handlePress = (screen) => {
    console.log(`${screen} 화면으로 이동`); // 여기에서 네비게이션 구현 가능
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>설정 및 마이페이지</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('개인정보관리')}>
        <Text style={styles.buttonText}>개인정보관리</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('결제수단')}>
        <Text style={styles.buttonText}>결제수단</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('프로필 변경')}>
        <Text style={styles.buttonText}>프로필 변경</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('고객센터')}>
        <Text style={styles.buttonText}>고객센터</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('로그아웃')}>
        <Text style={styles.buttonText}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => handlePress('회원탈퇴')}>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    width: '70%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  footerButton: {
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});

export default App;
