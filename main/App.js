import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation'; // 네비게이션 파일
import { AuthProvider } from './AuthProvider'; // AuthProvider 가져오기

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;