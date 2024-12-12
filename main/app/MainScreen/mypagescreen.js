import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../../AuthProvider'; // AuthContext 가져오기

const MypageScreen = ({ navigation }) => {
    const { logout } = useContext(AuthContext);
    // 로그아웃 처리
    const handleLogout = async () => {
        logout();
    };

    return (
    <SafeAreaView style={styles.container}>
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
            onPress={handleLogout}
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
    </SafeAreaView>
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
});

export default MypageScreen;
