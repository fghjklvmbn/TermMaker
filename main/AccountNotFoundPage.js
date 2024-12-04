import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용을 위해 필요

const AccountNotFoundPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* 제목 */}
      <Text style={styles.title}>계정찾기 오류</Text>

      {/* 계정 찾기 오류 메시지 */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>아이디 혹은 비밀번호가 발견되지 않았습니다.</Text>
        <Text style={styles.resultText}>회원가입 후 이용해주세요.</Text>
      </View>

      {/* 로그인 버튼과 회원가입 버튼을 같은 줄에 배치 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 40,
    marginLeft: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
  },
  resultContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  button: {
    backgroundColor: '#D9D9D9',
    width: '40%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default AccountNotFoundPage;
