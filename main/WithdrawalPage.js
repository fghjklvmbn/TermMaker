import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const WithdrawalPage = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    if (password.trim() === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    const isPasswordCorrect = true; // 비밀번호가 올바른지 확인하는 로직
    if (isPasswordCorrect) {
      navigation.navigate('FinalWithdrawalPage'); // 비밀번호가 맞으면 FinalWithdrawalPage로 이동
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원탈퇴</Text>
      <Text style={styles.subtitle}>정말로 회원 탈퇴하시겠습니까?</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="비밀번호 입력"
        placeholderTextColor="#ccc"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: 90,
  },
  subtitle: {
    fontSize: 25,
    color: '#000',
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#ccc',
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default WithdrawalPage;



