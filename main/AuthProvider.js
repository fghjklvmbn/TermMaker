// AuthProvider.js
import React, { createContext, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 정의
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 상태 확인
  const checkLoginStatus = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        await refreshAccessToken();
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      setIsLoggedIn(false);
    }
  }, []);

  // 로그인 함수
  const login = async (accessToken, refreshToken) => {
    try {
      await AsyncStorage.setItem('token', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  // 로그아웃 함수
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('refreshToken');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // 액세스 토큰 갱신
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
        await AsyncStorage.setItem('token', accessToken);
        setIsLoggedIn(true);
      } else {
        logout();
      }
    } catch (error) {
      console.error('Error refreshing access token:', error);
      logout();
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, checkLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };