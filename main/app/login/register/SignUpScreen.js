import React, { useState } from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../univ/BackButton';
import SignUpForm from './SignUpForm';
import SubmitButton from './SubmitButton';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const [nick, setNickname] = useState('');

  const validateForm = () => {
    if (
      !name ||
      !birthYear ||
      !birthMonth ||
      !birthDay ||
      !email ||
      !username ||
      !password ||
      !phone1 ||
      !phone2 ||
      !phone3 ||
      !nick
    ) {
      Alert.alert('오류', '모든 필드를 입력해주세요.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
  
    const data = {
      username,
      password,
      name,
      email,
      birthday: `${birthYear}-${birthMonth}-${birthDay}`, // 날짜 형식 보정
      nick,
      phonenum: `${phone1}-${phone2}-${phone3}`,
    };

    console.log(data);
  
    try {
      const response = await axios.post('http://dsapoi881.duckdns.org:3123/api/user/register', data);
  
      // 서버에서 성공 여부 확인
      if (response.status === 200 || response.status === 201) {
        Alert.alert('회원가입 성공', '회원가입이 완료되었습니다.');
        navigation.navigate('Login'); // 성공 시 로그인 화면으로 이동
      } else {
        // 상태 코드가 200이 아니면 오류로 처리
        Alert.alert('회원가입 실패', '서버에서 요청을 처리하지 못했습니다.');
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      if (error.response) {
        // 서버 응답이 있지만 에러 상태 코드인 경우
        Alert.alert('회원가입 실패', error.response.data.message || '서버 오류가 발생했습니다.');
        console.error('Response error:', error.response);
      } else if (error.request) {
        // 요청이 전송되었지만 응답을 받지 못한 경우
        Alert.alert('네트워크 오류', '서버에 연결할 수 없습니다. 인터넷 연결을 확인해주세요.');
        console.error('No response received:', error.request);
      } else {
        // 기타 예상치 못한 오류
        Alert.alert('회원가입 실패', '예기치 못한 오류가 발생했습니다.');
        console.error('Unexpected error:', error.message);
      }
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <Text style={styles.title}>회원가입</Text>
      <SignUpForm
        setName={setName}
        setBirthYear={setBirthYear}
        setBirthMonth={setBirthMonth}
        setBirthDay={setBirthDay}
        setEmail={setEmail}
        setUserId={setUserId}
        setPassword={setPassword}
        setPhone1={setPhone1}
        setPhone2={setPhone2}
        setPhone3={setPhone3}
        setNickname={setNickname}
      />
      <SubmitButton handleSubmit={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default SignUpScreen;
