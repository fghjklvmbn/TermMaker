import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const PaymentMethodsPage03 = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [cvc, setCvc] = useState('');

  const monthInputRef = useRef(null);
  const dayInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const cvcInputRef = useRef(null);

  const handleCancel = () => {
    navigation.goBack(); // 이전 페이지로 돌아가기
  };

  const handleUpdate = () => {
    // 입력 값 확인
    if (!cardNumber || !expirationDate || !birthDate || !password || !cvc) {
      Alert.alert('모든 정보를 입력해주세요.');
      return;
    }

    // 수정 처리 로직 추가
    console.log('결제수단 수정');
    Alert.alert('결제수단이 수정되었습니다.');
    navigation.goBack(); // 수정 후 이전 페이지로 이동
  };

  const handleCardNumberChange = (text) => {
    let formattedText = text.replace(/\D/g, ''); // 숫자만 남기기
    if (formattedText.length > 4) {
      formattedText = formattedText.replace(/(\d{4})(?=\d)/g, '$1-'); // 4자리마다 "-" 추가
    }
    setCardNumber(formattedText);

    if (formattedText.length === 19) {
      monthInputRef.current.focus(); // 카드번호 16자리 입력 후 유효기간으로 포커스 이동
    }
  };

  const handleExpirationDateChange = (text) => {
    let formattedText = text.replace(/\D/g, ''); // 숫자만 남기기
    if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + '/' + formattedText.slice(2);
    }
    setExpirationDate(formattedText);

    if (formattedText.length === 5) {
      dayInputRef.current.focus(); // 유효기간 4자리 입력 후 생년월일로 포커스 이동
    }
  };

  const handleBirthDateChange = (text) => {
    let formattedText = text.replace(/\D/g, ''); // 숫자만 남기기
    setBirthDate(formattedText);

    if (formattedText.length === 8) {
      passwordInputRef.current.focus(); // 생년월일 8자리 입력 후 비밀번호로 포커스 이동
    }
  };

  const handlePasswordChange = (text) => {
    let formattedText = text.replace(/\D/g, ''); // 숫자만 남기기
    setPassword(formattedText);

    if (formattedText.length === 2) {
      cvcInputRef.current.focus(); // 비밀번호 2자리 입력 후 CVC로 포커스 이동
    }
  };

  const handleCvcChange = (text) => {
    let formattedText = text.replace(/\D/g, ''); // 숫자만 남기기
    setCvc(formattedText);
  };

  return (
    <View style={styles.container}>
      {/* 이전 버튼 */}
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelText}>이전</Text>
      </TouchableOpacity>

      {/* 결제수단 수정 텍스트 */}
      <Text style={styles.title}>결제수단 수정</Text>

      {/* 카드번호 입력 */}
      <Text style={styles.label}>카드번호</Text>
      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={handleCardNumberChange}
        placeholder="카드번호 입력"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        maxLength={19} // 16자리 + 3개의 "-"로 총 19자리
      />

      {/* 유효기간 입력 */}
      <Text style={styles.label}>유효기간</Text>
      <TextInput
        style={styles.input}
        value={expirationDate}
        onChangeText={handleExpirationDateChange}
        placeholder="MM/YY"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        maxLength={5} // 5자리 "MM/YY"
        ref={monthInputRef} // 유효기간 입력 필드 참조
      />

      {/* 생년월일 입력 */}
      <Text style={styles.label}>생년월일</Text>
      <TextInput
        style={styles.input}
        value={birthDate}
        onChangeText={handleBirthDateChange}
        placeholder="생년월일 입력"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        maxLength={8} // 8자리 생년월일
        ref={dayInputRef} // 생년월일 입력 필드 참조
      />

      {/* 비밀번호 입력 */}
      <Text style={styles.label}>비밀번호</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="비밀번호 입력"
        placeholderTextColor="#ccc"
        secureTextEntry
        maxLength={2} // 2자리 비밀번호
        ref={passwordInputRef} // 비밀번호 입력 필드 참조
      />

      {/* CVC 입력 */}
      <Text style={styles.label}>CVC</Text>
      <TextInput
        style={styles.input}
        value={cvc}
        onChangeText={handleCvcChange}
        placeholder="CVC"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        maxLength={3} // 3자리 CVC
        ref={cvcInputRef} // CVC 입력 필드 참조
      />

      {/* 수정하기 버튼 */}
      <TouchableOpacity style={styles.addButton} onPress={handleUpdate}>
        <Text style={styles.addButtonText}>수정하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  cancelButton: {
    alignSelf: 'flex-start',
    paddingLeft: 15,
    marginTop: 20,
  },
  cancelText: {
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginVertical: 40,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: '#000',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 20,
    fontSize: 14,
    color: '#000',
  },
  addButton: {
    width: '80%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default PaymentMethodsPage03;
