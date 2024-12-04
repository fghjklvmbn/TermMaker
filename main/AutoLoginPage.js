import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용을 위해 필요
//자동로그인 페이지
const AutoLoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 제목: ReTrack */}
      <Text style={styles.title}>ReTrack</Text>

      {/* 로그인 중... 텍스트와 동기화 아이콘 */}
      <View style={styles.loginContainer}>
        <Ionicons name="sync" size={50} color="black" /> {/* 동기화 아이콘*/}
        <Text style={styles.loadingText}>로그인 중...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center', 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: -20, 
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 10,
  },
});

export default AutoLoginPage;
