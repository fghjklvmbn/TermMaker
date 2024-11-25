import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, AsyncStorage, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  // 로딩 상태
  const [loginError, setLoginError] = useState('');  // 로그인 오류 상태 추가
  const [logoOpacity] = useState(new Animated.Value(1));  // 로고 애니메이션을 위한 값

  // 페이지가 렌더링될 때 자동 로그인 상태 확인
  useEffect(() => {
    const checkAutoLogin = async () => {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');
      
      if (savedUsername && savedPassword) {
        setForm({ username: savedUsername, password: savedPassword });
        setIsAutoLogin(true);
        handleLogin(); // 자동 로그인 처리
      }
    };
    checkAutoLogin();
  }, []);

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setLoginError(''); // 이전의 오류 메시지 초기화
    Animated.timing(logoOpacity, {
      toValue: 0, // 로고 투명도 점점 줄이기
      duration: 500,
      useNativeDriver: true,
    }).start();
  
    try {
      // 서버로 로그인 API 호출
      const response = await axios.post('http://dsapoi881.duckdns.org/api/login', {
        username: form.username,
        password: form.password,
      });
  
      // 서버 응답에서 토큰 가져오기
      const { token } = response.data;
  
      if (token) {
        // 로그인 성공
        await AsyncStorage.setItem('token', token); // 토큰을 AsyncStorage에 저장
        setIsLoading(false); // 로딩 종료
        navigation.navigate('Home'); // 로그인 후 홈 화면으로 이동
      } else {
        // 로그인 실패 (토큰이 없으면 실패 처리)
        setLoginError('로그인 실패. 아이디 또는 비밀번호를 확인해주세요.');
        setIsLoading(false); // 로딩 종료
        Animated.timing(logoOpacity, {
          toValue: 1, // 로고 투명도를 다시 원래대로
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    } catch (error) {
      // 에러 발생 시 처리
      setLoginError(
        error.response?.data?.message || '로그인 중 오류가 발생했습니다. 다시 시도해주세요.'
      );
      setIsLoading(false);
      Animated.timing(logoOpacity, {
        toValue: 1, // 로고 투명도를 다시 원래대로
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleAutoLoginChange = () => {
    setIsAutoLogin(!isAutoLogin);
  };

  return (
    <View style={styles.container}>
      {/* ReTrack 로고 */}
      <View style={styles.logoContainer}>
        <Animated.Text style={[styles.logoText, { opacity: logoOpacity }]}>ReTrack</Animated.Text>
      </View>

      {/* 로그인 폼 */}
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

        {/* 자동 로그인 체크박스 */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={handleAutoLoginChange}
          >
            <View style={[styles.checkboxBox, isAutoLogin && styles.checkboxChecked]} />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>자동 로그인</Text>
        </View>

        {/* 로그인 버튼 */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        {/* 로그인 실패 오류 메시지 */}
        {loginError ? (
          <Text style={styles.errorText}>{loginError}</Text>
        ) : null}
      </View>

      {/* 회원가입 및 비밀번호 찾기 */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AccountRecoveryScreen')}>
          <Text style={styles.footerText}>계정 찾기</Text>
        </TouchableOpacity>
      </View>

      {/* 로딩 화면 */}
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
    color: '#000000',  // 로고 색상 변경
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#000000',  // 테두리 색상 변경
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',  // 배경색을 하얀색으로 설정
  },
  button: {
    backgroundColor: '#D9D9D9',  // 버튼 배경색 변경
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
    backgroundColor: '#000000',  // 체크박스 색상 변경
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
    color: '#000000',  // 링크 텍스트 색상 변경
  },
  loadingContainer: {
    position: 'absolute',
    top: height / 2,
    left: width / 2 - 75,
    backgroundColor: '#000',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    opacity: 0.8,
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
});

export default Login;
