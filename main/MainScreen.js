import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const MainScreen = () => {
  const navigation = useNavigation();

  const buttons = [
    { label: '홈', onPress: () => console.log('홈') },
    { label: '대여/반납', onPress: () => navigation.navigate('RentalStart') }, // 대여/반납 페이지로 이동
    { label: '커뮤니티', onPress: () => navigation.navigate('BoardScreen') }, // 커뮤니티 페이지로 이동
    { label: '설정', onPress: () => navigation.navigate('Mypage') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ReTrack</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {buttons.slice(0, 2).map((button, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={button.onPress}>
              <Text style={styles.buttonText}>{button.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {buttons.slice(2, 4).map((button, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={button.onPress}>
              <Text style={styles.buttonText}>{button.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

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
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
    marginBottom: 10,
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
    width: width * 0.4,
    height: height * 0.12,
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
    width: width * 0.25,
    paddingVertical: 10,
  },
  navButtonText: {
    fontSize: 16,
    marginHorizontal: 5,
    color: '#000',
  },
});

export default MainScreen;

