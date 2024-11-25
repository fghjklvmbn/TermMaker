import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용을 위해 필요

const AccountRecoveryPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      {/* 제목 */}
      <Text style={styles.title}>계정찾기</Text>
      {/* 버튼들 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('FindMy');
            find_id = true;
          }}
        >
          <Text style={styles.buttonText}>아이디 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('FindMy');
            find_pw = true;
          }}
        >
          <Text style={styles.buttonText}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start', // 왼쪽 정렬
    marginTop: 40, // 상단 여백
    marginLeft: 20, // 2칸 오른쪽으로 이동
  },
  title: {
    fontSize: 30, // 제목 크기
    fontWeight: 'bold',
    textAlign: 'center', // 가운데 정렬
    marginTop: 80,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center', // 버튼들을 가운데로 배치
    alignItems: 'center', // 가로로 가운데 정렬
    marginTop: 2, // 계정 찾기 텍스트와 버튼들 간격
  },
  button: {
    backgroundColor: '#D9D9D9',
    width: '80%', // 버튼 너비
    paddingVertical: 15,
    borderRadius: 30, // 둥근 버튼 스타일
    alignItems: 'center',
    marginTop: 30, // 버튼 간격
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default AccountRecoveryPage;
