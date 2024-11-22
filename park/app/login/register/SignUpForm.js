import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const SignUpForm = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="이름" />
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.dateInput]} placeholder="YYYY" />
        <Text style={styles.separator}>-</Text>
        <TextInput style={[styles.input, styles.dateInput]} placeholder="MM" />
        <Text style={styles.separator}>-</Text>
        <TextInput style={[styles.input, styles.dateInput]} placeholder="DD" />
      </View>
      <TextInput style={styles.input} placeholder="이메일" />
      <TextInput style={styles.input} placeholder="아이디" />
      <TextInput
        style={styles.input}
        placeholder="비밀번호(특수문자 포함, 8자리 이상)"
        secureTextEntry
      />
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.phoneInput]} placeholder="010" />
        <Text style={styles.separator}>-</Text>
        <TextInput style={[styles.input, styles.phoneInput]} placeholder="XXXX" />
        <Text style={styles.separator}>-</Text>
        <TextInput style={[styles.input, styles.phoneInput]} placeholder="XXXX" />
      </View>
      <TextInput style={styles.input} placeholder="닉네임" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateInput: {
    flex: 1,
    textAlign: 'center',
  },
  phoneInput: {
    flex: 1,
    textAlign: 'center',
  },
  separator: {
    marginHorizontal: 5,
    fontSize: 16,
  },
});

export default SignUpForm;