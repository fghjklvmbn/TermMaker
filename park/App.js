import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './app/univ/header';
import MainButtons from './app/mainScreen/button';
import BottomNavBar from './app/univ/navigation';

const App = () => {
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

export default App;
