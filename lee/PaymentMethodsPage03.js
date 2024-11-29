import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PaymentMethodsPage03 = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [cvc, setCvc] = useState('');

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

  return (
    <View style={styles.container}>
      {/* 헤더 영역 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleCancel}>
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>결제수단 수정</Text>
      </View>

      {/* 입력 폼 */}
      <View style={styles.form}>
        <Text style={styles.label}>카드번호</Text>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          placeholder="카드번호 입력"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          maxLength={19}
        />

        <Text style={styles.label}>유효기간</Text>
        <TextInput
          style={styles.input}
          value={expirationDate}
          onChangeText={(text) => setExpirationDate(text)}
          placeholder="MM/YY"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          maxLength={5}
        />

        <Text style={styles.label}>생년월일</Text>
        <TextInput
          style={styles.input}
          value={birthDate}
          onChangeText={(text) => setBirthDate(text)}
          placeholder="생년월일 입력"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          maxLength={8}
        />

        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="비밀번호 입력"
          placeholderTextColor="#ccc"
          secureTextEntry
          maxLength={2}
        />

        <Text style={styles.label}>CVC</Text>
        <TextInput
          style={styles.input}
          value={cvc}
          onChangeText={(text) => setCvc(text)}
          placeholder="CVC"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          maxLength={3}
        />
      </View>

      {/* 등록하기 버튼 */}
      <TouchableOpacity style={styles.addButton} onPress={handleRegister}>
        <Text style={styles.addButtonText}>수정하기</Text>
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

export default PaymentMethodsPage03;
