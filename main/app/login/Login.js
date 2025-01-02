import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../AuthProvider'; // AuthContext 가져오기

const { width, height } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext); // 로그인 함수 가져오기
  const [form, setForm] = useState({ username: '', password: '' });
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const checkAutoLogin = async () => {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');
      if (savedUsername && savedPassword) {
        setForm({ username: savedUsername, password: savedPassword });
        setIsAutoLogin(true);
        handleLogin(); // 자동 로그인 실행
      }
    };
    checkAutoLogin();
  }, []);

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setLoginError('');
    try {
      // 백엔드 로컬 <-> 서버
      const response = await axios.post('http://localhost:3000/api/user/login', {
      // const response = await axios.post('http://dsapoi881.duckdns.org:3123/api/user/login', {
        username: form.username,
        password: form.password,
      });

      const { accessToken, refreshToken } = response.data;

      if (accessToken && refreshToken) {
        // AsyncStorage에 토큰 저장
        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('refreshToken', refreshToken);

        // AuthContext의 로그인 함수 호출
        login(accessToken, refreshToken);
      } else {
        setLoginError('아이디 또는 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.log(error);
      setLoginError('에러발생');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAutoLoginChange = () => {
    setIsAutoLogin(!isAutoLogin);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={[styles.logoText]}>ReTrack</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          value={form.username}
          onChangeText={(text) => handleInputChange('username', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          secureTextEntry
          value={form.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={handleAutoLoginChange}>
            <View style={[styles.checkboxBox, isAutoLogin && styles.checkboxChecked]} />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>자동 로그인</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AccountRecoveryScreen')}>
          <Text style={styles.footerText}>계정 찾기</Text>
        </TouchableOpacity>
      </View>

      {isLoading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>로그인 중...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxBox: {
    width: 16,
    height: 16,
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#000000',
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 400,
  },
  footerText: {
    fontSize: 14,
    color: '#000000',
  },
  loadingContainer: {
    position: 'absolute',
    top: height / 2,
    left: width / 2 - 75,
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 8,
    zIndex: 100,
  },
  loadingText: {
    fontSize: 16,
    color: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
  },
});

export default Login;