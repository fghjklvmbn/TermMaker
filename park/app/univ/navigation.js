import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const BottomNavBar = () => {
  const navItems = [
    { label: '메인화면', onPress: () => console.log('메인화면') },
    { label: '대여/반납', onPress: () => console.log('대여/반납') },
    { label: '커뮤니티', onPress: () => console.log('커뮤니티') },
    { label: '설정', onPress: () => console.log('설정') },
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
