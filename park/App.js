import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppNavigator from './navigation';


const App = () => {
  return ( 
    <AppNavigator></AppNavigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
