import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 아이콘을 사용하기 위한 임포트

const FindIDResultPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* 제목 */}
      <Text style={styles.title}>아이디 찾기</Text>

      {/* 아이디 찾기 결과 텍스트 */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>당신의 아이디는</Text>
        <Text style={styles.resultID}>Test</Text> {/* 아이디가 Test로 고정된 예시 */}
        <Text style={styles.resultText}>입니다.</Text>
      </View>

      {/* 로그인 버튼 */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'flex-start',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40, 
  },
  resultContainer: {
    marginTop: 60, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'normal',
    marginVertical: 5,
  },
  resultID: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  button: {
    backgroundColor: '#D9D9D9',
    width: '60%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 90, 
    alignSelf: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default FindIDResultPage;
