import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BluetoothGuide from './app/BluetoothGuide';
import LocationGuide from './app/LocationGuide';
import MapPage from './app/MapPage';
import RentalStart from './app/RentalStart';
import Rental from './app/Rental';
import Renting from './app/Renting';
import Camera from './app/Camera';
import ReturnConfirmation from './app/ReturnConfirmation';
import Header from './app/univ/header';
import Navigation from './app/univ/navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        {/* 헤더 영역 */}
        <Header style={styles.header} />

        {/* 콘텐츠 영역 */}
        <View style={styles.content}>
          <Stack.Navigator
            initialRouteName="BluetoothGuide"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BluetoothGuide" component={BluetoothGuide} />
            <Stack.Screen name="LocationGuide" component={LocationGuide} />
            <Stack.Screen name="MapPage" component={MapPage} />
            <Stack.Screen name="RentalStart" component={RentalStart} />
            <Stack.Screen name="Rental" component={Rental} />
            <Stack.Screen name="Renting" component={Renting} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name="ReturnConfirmation" component={ReturnConfirmation} />
          </Stack.Navigator>
        </View>

        {/* 하단 네비게이션 영역 */}
        <Navigation style={styles.navigation} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  navigation: {
    backgroundColor: '#6200ee',
    height: 60,
  },
});
