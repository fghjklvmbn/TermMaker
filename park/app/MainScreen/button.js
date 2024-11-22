import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const MainButtons = () => {
  const buttons = [
    { label: '대여하기', onPress: () => console.log('대여하기') },
    { label: '반납하기', onPress: () => console.log('반납하기') },
    { label: '커뮤니티', onPress: () => console.log('커뮤니티') },
    { label: '설정', onPress: () => console.log('설정') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {buttons.slice(0, 2).map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { width: width * 0.4, height: height * 0.12 }]}
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
            style={[styles.button, { width: width * 0.4, height: height * 0.12 }]}
            onPress={button.onPress}
          >
            <Text style={styles.buttonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // 세로 방향 중앙 정렬
    alignItems: 'center', // 가로 방향 중앙 정렬
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
  },
  row: {
    flexDirection: 'row', // 가로로 배치
    justifyContent: 'space-between', // 버튼 사이 간격
    marginBottom: 16, // 행 간의 간격
  },
  button: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8, // 버튼 간 가로 여백
    borderRadius: 12,
  },
  buttonText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
  },
});

export default MainButtons;
