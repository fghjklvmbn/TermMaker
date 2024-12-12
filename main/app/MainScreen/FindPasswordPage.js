import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용을 위해 필요
// 비밀번호 찾기
const FindPasswordPage = ({ navigation }) => {
  const [name, setId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // 여기에 비밀번호 찾기 로직을 추가하세요
    console.log('비밀번호 찾기 정보:', { name, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* 제목 */}
      <Text style={styles.title}>비밀번호 찾기</Text>

      {/* 아이디 입력 */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>아이디</Text>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={setId} 
          placeholder="아이디"
          placeholderTextColor="#888" 
        />
      </View>

      {/* 이메일 입력 */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>이메일</Text>
        <TextInput 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail} 
          placeholder="example@example.com"
          placeholderTextColor="#888" 
          keyboardType="email-address"
        />
      </View>

      {/* 확인 버튼 */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
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
  inputContainer: {
    marginTop: 20,
    width: '90%',  
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#D9D9D9',
    width: '60%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default FindPasswordPage;