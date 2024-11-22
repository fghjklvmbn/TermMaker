import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// 스크린 파일 임포트
import Login from './app/login/Login'; // 로그인 화면
import FindMy from './app/login/FindAccount/FindMy'; // 비밀번호 찾기 화면
import Result from './app/login/FindAccount/result'; // 결과 화면
import SignupForm from './app/login/register/SignUpForm'; // 회원가입 폼 화면
import SignupScreen from './app/login/register/SignUpScreen'; // 회원가입 화면
import SubmitButton from './app/login/register/SubmitButton'; // 제출 버튼 화면
import MainScreen from './app/MainScreen/MainScreen'; // 메인 화면

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FindMy" component={FindMy} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="SignupForm" component={SignupForm} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SubmitButton" component={SubmitButton} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
