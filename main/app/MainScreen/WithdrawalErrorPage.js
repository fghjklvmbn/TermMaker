import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const WithdrawalErrorPage = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    if (password.trim() === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    alert('비밀번호 혹은 문장이 올바르지 않습니다.\n다시 입력해 주세요.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원탈퇴</Text>
      <Text style={styles.subtitle}>정말로 회원 탈퇴하시겠습니까?</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="비밀번호를 입력하세요."
        placeholderTextColor="#ccc"
        secureTextEntry
      />
      <Text style={styles.errorMessage}>
        비밀번호 혹은 문장이 올바르지 않습니다.{"\n"}다시 입력해 주세요.
      </Text>
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
    marginBottom: 60,
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#ccc',
    fontSize: 14,
    color: '#000',
  },
  errorMessage: {
    fontSize: 14,
    color: '#A03737',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
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

export default WithdrawalErrorPage;

