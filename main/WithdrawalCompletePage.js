import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// 회원탈퇴 성공 페이지
const WithdrawalCompletePage = ({ navigation }) => {
    const handleConfirm = () => {
        navigation.goBack(); // 이전 페이지로 돌아가기
    };

    return (
        <View style={styles.container}>
            {/* 회원탈퇴 텍스트 */}
            <Text style={styles.title}>회원탈퇴</Text>

            {/* 회원탈퇴 완료 텍스트 */}
            <Text style={styles.subtitle}>회원탈퇴 되었습니다.</Text>

            {/* 확인 버튼 */}
            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 33,
      fontWeight: 'bold',
      marginBottom: 105,
    },
    subtitle: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#3737A0',
      marginBottom: 50,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#D9D9D9',
      width: '80%',
      paddingVertical: 18,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#000',
      fontSize: 16,
    },
  });  

export default WithdrawalCompletePage;
