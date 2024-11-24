import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// 스크린 파일 임포트
import Login from './app/login/Login'; // 로그인 화면
import Register from './app/login/register/SignUpScreen'; // 회원가입 화면
import MainScreen from './app/mainScreen/MainScreen'; // 메인 화면
import AccountRecoveryScreen from './app/login/FindAccount/AccountRecoveryScreen'; // 계정찾기 화면

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AccountRecoveryScreen" component={AccountRecoveryScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;