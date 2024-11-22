import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// 헤더 및 네비바
import Header from './app/univ/header';
import BottomNavBar from './app/univ/navigation';
import AppNavigator from './navigation';


const App = () => {
  return (
    AppNavigator
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
