import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용을 위해 필요

const FindIDPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // 여기에 아이디 찾기 로직을 추가하세요
    console.log('아이디 찾기 정보:', { name, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* 제목 */}
      <Text style={styles.title}>아이디 찾기</Text>

      {/* 이름 입력 */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>이름</Text>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={setName} 
          placeholder="홍길동"
          placeholderTextColor="#888"  // 회색 텍스트 색상
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
          placeholderTextColor="#888"  // 회색 텍스트 색상
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
    width: '90%',  // 입력 필드의 너비를 줄였습니다.
    alignSelf: 'center',  // 입력 필드를 가운데 정렬
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
    backgroundColor: '#D9D9D9', // 버튼 색상 변경
    width: '60%', // 버튼 너비를 줄였습니다.
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center', // 버튼을 가운데 정렬
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default FindIDPage;
