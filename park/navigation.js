import React, { useEffect, useState, createContext, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 스크린 파일 임포트
import Login from './app/login/Login'; // 로그인 화면
import Register from './app/login/register/SignUpScreen'; // 회원가입 화면
import MainScreen from './app/MainScreen/MainScreen'; // 메인 화면
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
  const { isLoggedIn } = useContext(AuthContext); // Context에서 로그인 상태 가져오기

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
      setIsLoggedIn(!!token);
    } catch (error) {
      console.error("Error checking token", error);
      setIsLoggedIn(false);
    }
  };

  // 로그인 함수
  const login = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
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

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
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
