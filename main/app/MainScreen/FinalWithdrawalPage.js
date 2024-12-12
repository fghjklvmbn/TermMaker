import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
//회원탈퇴 마지막 확인
const FinalWithdrawalPage = ({ navigation }) => {
  const [confirmationText, setConfirmationText] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    if (confirmationText.trim() === '') {
      alert('문장을 입력해주세요.');
      return;
    }
    if (confirmationText.trim() !== '회원을 탈퇴합니다') {
      setErrorText('비밀번호 혹은 문장이 올바르지 않습니다.\n다시 입력해 주세요.');
      return;
    }
    alert('회원탈퇴가 완료되었습니다.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원탈퇴</Text>
      <TextInput
        style={styles.input}
        value={confirmationText}
        onChangeText={setConfirmationText}
        placeholder="문장 입력"
        placeholderTextColor="#ccc"
      />
      <Text style={styles.subtitle}>회원탈퇴하시려면 "회원을 탈퇴합니다" 라고 써주세요</Text>
      {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
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
    marginBottom: 80,
  },
  subtitle: {
    fontSize: 16,
    color: '#A03737',
    marginBottom: 20,
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
  errorText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
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
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default FinalWithdrawalPage;
