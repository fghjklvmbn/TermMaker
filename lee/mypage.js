import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const App = () => {
  const handlePress = async (action) => {
    try {
      // Express.js 서버로 요청 보내기
      const response = await fetch('http://localhost:8081', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action }),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert('Success', result.message);
      } else {
        Alert.alert('Error', 'Something went wrong.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server.');
    }
  };

  // 버튼 데이터 정의
  const buttons = [
    { label: '홈', onPress: () => console.log('홈') },
    { label: '대여/반납', onPress: () => console.log('대여/반납') },
    { label: '커뮤니티', onPress: () => console.log('커뮤니티') },
    { label: '설정', onPress: () => console.log('설정') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>설정 및 마이페이지</Text>
      {['개인정보관리', '결제수단', '프로필 변경', '고객센터', '로그아웃'].map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.button}
          onPress={() => handlePress(item)}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => handlePress('회원탈퇴')}
      >
        <Text style={styles.footerText}>회원탈퇴</Text>
      </TouchableOpacity>

      {/* 하단 네비게이션 버튼 (전체 너비) */}
      <View style={styles.bottomNav}>
        {buttons.map((button, index) => (
          <TouchableOpacity key={index} style={styles.navButton} onPress={button.onPress}>
            <Text style={styles.navButtonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: 90,
  },
  button: {
    width: '70%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  footerButton: {
    marginTop: 80,
    alignSelf: 'flex-end',
    paddingRight: 15,
  },
  footerText: {
    fontSize: 14,
    color: 'red',
    textDecorationLine: 'underline',
  },
  // 하단 네비게이션 스타일
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#D9D9D9',
    position: 'absolute',  // 화면 하단에 고정
    bottom: 0,             // 하단에 위치
    width: '400',         // 가로 너비 전체
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.25,   // 버튼 너비를 화면의 1/4 크기로 설정
    paddingVertical: 10,   // 버튼 안쪽 여백
  },
  navButtonText: {
    fontSize: 16,
    marginHorizontal: 5,
    color: '#000',         // 텍스트 색상
  },
});

export default App;
