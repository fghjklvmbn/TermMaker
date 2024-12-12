import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const BottomNavBar = () => {
  const navigation = useNavigation();
  const navItems = [
    { label: '홈', onPress: () => navigation.navigate("MainScreen") },
    { label: '대여/반납', onPress: () => navigation.navigate("RentalStart") },
    { label: '커뮤니티', onPress: () => navigation.navigate("BoardScreen") },
    { label: '설정', onPress: () => navigation.navigate("Mypage") },
  ];

  return (
    <View style={styles.navBar}>
      {navItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.navItem} onPress={item.onPress}>
          <Text style={[styles.navText, { fontSize: width * 0.035 }]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // 바꿀꺼
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
    width: width * 0.25,
    paddingVertical: 10,
  },
  navButtonText: {
    fontSize: 16,
    marginHorizontal: 5,
    color: '#000',
  },

  // 기존 
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
  },
});

export default BottomNavBar;
