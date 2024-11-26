import React, { useEffect, useState, createContext, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// 스크린 파일 임포트
import Login from './app/login/Login'; // 로그인 화면
import Register from './app/login/register/SignUpScreen'; // 회원가입 화면
import MainScreen from './app/MainScreen/MainScreen'; // 메인 화면
import FindMy from './app/login/FindAccount/FindMy';
import AccountRecoveryScreen from './app/login/FindAccount/AccountRecoveryScreen'; // 계정찾기 화면

const Stack = createStackNavigator();

// 로그인 상태 관리를 위한 Context 생성
const AuthContext = createContext();

// AuthStack: 로그인, 회원가입, 계정 찾기 스택
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AccountRecoveryScreen" component={AccountRecoveryScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="FindMy" component={FindMy}/>
    </Stack.Navigator>
  );
};

// AppStack: 메인 화면
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const { isLoggedIn, checkLoginStatus } = useContext(AuthContext); // Context에서 로그인 상태 가져오기

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

// AuthProvider: 로그인 상태를 관리하는 Provider 컴포넌트
  const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 토큰 확인 함수
  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        // 리프레시 토큰을 사용하여 액세스 토큰을 갱신할 수 있는지 확인
        await refreshAccessToken();
      }
    } catch (error) {
      console.error("Error checking token", error);
      setIsLoggedIn(false);
    }
  };

  // 로그인 함수
  const login = async (accessToken, refreshToken) => {
    try {
      await AsyncStorage.setItem('token', accessToken); // 액세스 토큰 저장
      await AsyncStorage.setItem('refreshToken', refreshToken); // 리프레시 토큰 저장
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  // 로그아웃 함수
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  // 토큰 재발급
  const refreshAccessToken = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (!refreshToken) {
        logout();
        return;
      }
  
      const response = await axios.post('http://localhost:3000/api/user/refresh-token', { refreshToken });
      const { accessToken } = response.data;
  
      if (accessToken) {
        await AsyncStorage.setItem('token', accessToken); // 새 액세스 토큰 저장
        setIsLoggedIn(true);
        console.log('액세스 토큰 갱신 성공');
      } else {
        logout();
      }
    } catch (error) {
      // 로그인 화면에서는 오류를 묵살하고 아무 작업도 하지 않음
      console.log('액세스 토큰 갱신 실패');
      // 오류 발생 시 아무 작업도 하지 않음, 또는 로그아웃 처리 생략 가능
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, checkLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export { AuthContext }; // Context를 다른 컴포넌트에서 사용하기 위해 내보냄
export default App;
