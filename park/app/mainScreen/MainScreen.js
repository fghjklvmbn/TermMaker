import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../univ/Header';
import MainButtons from './button';
import BottomNavBar from '../univ/navigation';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MainButtons />
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MainScreen;