import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//결제수단 등록
const PaymentMethodsPage02 = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [cvc, setCvc] = useState('');

 
  const expirationDateInputRef = useRef(null);
  const birthDateInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const cvcInputRef = useRef(null);

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    if (!cardNumber || !expirationDate || !birthDate || !password || !cvc) {
      Alert.alert('모든 정보를 입력해주세요.');
      return;
    }
    Alert.alert('결제수단이 등록되었습니다.');
    navigation.goBack();
  };

  const formatCardNumber = (text) => {
    let formatted = text.replace(/\D/g, '');
    if (formatted.length <= 4) {
      return formatted;
    } else if (formatted.length <= 8) {
      return formatted.slice(0, 4) + '-' + formatted.slice(4);
    } else if (formatted.length <= 12) {
      return formatted.slice(0, 4) + '-' + formatted.slice(4, 8) + '-' + formatted.slice(8);
    } else {
      return formatted.slice(0, 4) + '-' + formatted.slice(4, 8) + '-' + formatted.slice(8, 12) + '-' + formatted.slice(12, 16);
    }
  };

  const handleCardNumberChange = (text) => {
    const formatted = formatCardNumber(text);
    setCardNumber(formatted);
    if (formatted.length === 19) { 
      expirationDateInputRef.current.focus();
    }
  };

  const handleExpirationDateChange = (text) => {
    let formatted = text.replace(/\D/g, '');
    if (formatted.length <= 2) {
      setExpirationDate(formatted);
    } else if (formatted.length <= 4) {
      setExpirationDate(formatted.slice(0, 2) + '/' + formatted.slice(2));
    }
    if (formatted.length === 5) {  
      birthDateInputRef.current.focus();
    }
  };

  const handleBirthDateChange = (text) => {
    let formatted = text.replace(/\D/g, ''); 
    if (formatted.length <= 8) {
      setBirthDate(formatted);
    }
    if (formatted.length === 8) {  
      passwordInputRef.current.focus();
    }
  };

  const handlePasswordChange = (text) => {
    if (text.length <= 13) {
      setPassword(text);
    }
    if (text.length === 13) { 
      cvcInputRef.current.focus();
    }
  };

  const handleCvcChange = (text) => {
    if (text.length <= 3) {
      setCvc(text);
    }
    if (text.length === 3) { 
      handleRegister(); 
    }
  };

  return (
    <View style={styles.container}>
      {/* 헤더 영역 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleCancel}>
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>결제수단 등록</Text>
      </View>

      {/* 입력 폼 */}
      <View style={styles.form}>
        <Text style={styles.label}>카드번호</Text>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          placeholder="카드번호 입력"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          maxLength={19}
        />

        <Text style={styles.label}>유효기간</Text>
        <TextInput
          style={styles.input}
          value={expirationDate}
          onChangeText={handleExpirationDateChange}
          placeholder="MM/YY"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          maxLength={5}
          ref={expirationDateInputRef}
        />

        <Text style={styles.label}>생년월일</Text>
        <TextInput
          style={styles.input}
          value={birthDate}
          onChangeText={handleBirthDateChange}
          placeholder="생년월일 입력"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          maxLength={8}
          ref={birthDateInputRef}
        />

        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="비밀번호 입력"
          placeholderTextColor="#ccc"
          secureTextEntry
          maxLength={13}
          ref={passwordInputRef}
        />

        <Text style={styles.label}>CVC</Text>
        <TextInput
          style={styles.input}
          value={cvc}
          onChangeText={handleCvcChange}
          placeholder="CVC"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          maxLength={3}
          ref={cvcInputRef}
        />
      </View>

      {/* 등록하기 버튼 */}
      <TouchableOpacity style={styles.addButton} onPress={handleRegister}>
        <Text style={styles.addButtonText}>등록하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
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
  },
  addButton: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default PaymentMethodsPage02;
