import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MapPage = ({ navigation }) => {
  // 휠체어 아이콘 클릭 시 대여 페이지로 이동
  const handleWheelchairIconPress = () => {
    navigation.navigate('Rantal');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>지도 페이지</Text>
      
      {/* 이전 화면 버튼 (링크는 나중에 추가 예정) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>이전 화면</Text>
        </TouchableOpacity>
        
        {/* 현재 위치 고정 버튼 */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>현재 위치 고정</Text>
        </TouchableOpacity>
      </View>

      {/* 휠체어 아이콘 클릭 시 대여 페이지로 이동 */}
      <TouchableOpacity style={styles.wheelchairIcon} onPress={handleWheelchairIconPress}>
        <Text style={styles.iconText}>🚗</Text> {/* 휠체어 아이콘 */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#008CBA',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  wheelchairIcon: {
    marginTop: 50,
    padding: 20,
  },
  iconText: {
    fontSize: 40,
  }
});

export default MapPage;
