import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const MainScreen = () => {
  // 버튼 데이터를 정의합니다.
  const buttons = [
    { label: '홈', onPress: () => console.log('홈') },
    { label: '대여/반납', onPress: () => console.log('대여/반납') },
    { label: '커뮤니티', onPress: () => console.log('커뮤니티') },
    { label: '설정', onPress: () => console.log('설정') },
  ];

  return (
    <View style={styles.container}>
      {/* 상단 제목 */}
      <View style={styles.header}>
        <Text style={styles.title}>ReTrack</Text>
      </View>

      {/* 메인 버튼 영역 */}
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {buttons.slice(0, 2).map((button, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={button.onPress}
            >
              <Text style={styles.buttonText}>{button.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {buttons.slice(2, 4).map((button, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={button.onPress}
            >
              <Text style={styles.buttonText}>{button.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 하단 네비게이션 버튼 */}
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

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // 왼쪽 정렬
    alignItems: 'center',
    paddingLeft: 16, // 왼쪽 여백 추가
    marginBottom: 10,
    paddingTop: 20,  // 텍스트 위 여백 추가
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.4, // 화면 너비의 40%
    height: height * 0.12, // 화면 높이의 12%
    marginHorizontal: 8,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 30,
    backgroundColor: '#D9D9D9',
    marginTop: -20, 
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    marginHorizontal: 5,
  },
});

export default MainScreen;
