import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const App = ({ navigation }) => {
  const sendServerRequest = async (action) => {
    try {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>설정 및 마이페이지</Text>

      {/* 개인정보관리 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PersonalInfoEditPage')}
      >
        <Text style={styles.buttonText}>개인정보관리</Text>
      </TouchableOpacity>

      {/* 결제수단 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PaymentMethodsPage01')}
      >
        <Text style={styles.buttonText}>결제수단</Text>
      </TouchableOpacity>

      {/* 프로필 변경 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProfileEditPage')}
      >
        <Text style={styles.buttonText}>프로필 변경</Text>
      </TouchableOpacity>

      {/* 고객센터 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('안내', '고객센터 페이지는 아직 준비 중입니다.')}
      >
        <Text style={styles.buttonText}>고객센터</Text>
      </TouchableOpacity>

      {/* 로그아웃 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => sendServerRequest('로그아웃')}
      >
        <Text style={styles.buttonText}>로그아웃</Text>
      </TouchableOpacity>

      {/* 회원탈퇴 버튼 */}
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('WithdrawalPage')}
      >
        <Text style={styles.footerText}>회원탈퇴</Text>
      </TouchableOpacity>

      {/* 하단 네비게이션 버튼 */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('MainScreen')}
        >
          <Text style={styles.navButtonText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => Alert.alert('안내', '대여/반납 페이지는 아직 준비 중입니다.')}
        >
          <Text style={styles.navButtonText}>대여/반납</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => Alert.alert('안내', '커뮤니티 페이지는 아직 준비 중입니다.')}
        >
          <Text style={styles.navButtonText}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => console.log('설정')}
        >
          <Text style={styles.navButtonText}>설정</Text>
        </TouchableOpacity>
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
    marginBottom: 40,
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
    marginTop: 50,
    alignSelf: 'flex-end',
    paddingRight: 15,
  },
  footerText: {
    fontSize: 14,
    color: 'red',
    textDecorationLine: 'underline',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#D9D9D9',
    position: 'absolute',
    bottom: 0,
    width: '115%',
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

export default App;
