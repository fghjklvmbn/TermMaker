import React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions } from 'react-native';

const SignUpForm = ({
  name, setName,
  birthYear, setBirthYear,
  birthMonth, setBirthMonth,
  birthDay, setBirthDay,
  email, setEmail,
  username, setUserId,
  password, setPassword,
  phone1, setPhone1,
  phone2, setPhone2,
  phone3, setPhone3,
  nick, setNickname,
}) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="이름"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.flexInput]}
          placeholder="YYYY"
          value={birthYear}
          onChangeText={setBirthYear}
          keyboardType="numeric"
          maxLength={4}
        />
        <Text style={styles.separator}>-</Text>
        <TextInput
          style={[styles.input, styles.flexInput]}
          placeholder="MM"
          value={birthMonth}
          onChangeText={setBirthMonth}
          keyboardType="numeric"
          maxLength={2}
        />
        <Text style={styles.separator}>-</Text>
        <TextInput
          style={[styles.input, styles.flexInput]}
          placeholder="DD"
          value={birthDay}
          onChangeText={setBirthDay}
          keyboardType="numeric"
          maxLength={2}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={username}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호(특수문자 포함, 8자리 이상)"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.flexInput]}
          placeholder="010"
          value={phone1}
          onChangeText={setPhone1}
          keyboardType="numeric"
          maxLength={3}
        />
        <Text style={styles.separator}>-</Text>
        <TextInput
          style={[styles.input, styles.flexInput]}
          placeholder="XXXX"
          value={phone2}
          onChangeText={setPhone2}
          keyboardType="numeric"
          maxLength={4}
        />
        <Text style={styles.separator}>-</Text>
        <TextInput
          style={[styles.input, styles.flexInput]}
          placeholder="XXXX"
          value={phone3}
          onChangeText={setPhone3}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="닉네임"
        value={nick}
        onChangeText={setNickname}
      />

    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

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
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  flexInput: {
    width: screenWidth * 0.2, // 화면 너비의 20%
    textAlign: 'center',
  },
  separator: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    color: '#FFF',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default SignUpForm;
