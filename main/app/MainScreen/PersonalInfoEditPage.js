import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// 개인정보 관리
const PersonalInfoEditPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const [nickname, setNickname] = useState('');

  const monthInputRef = useRef(null);
  const dayInputRef = useRef(null);
  const phone2InputRef = useRef(null);
  const phone3InputRef = useRef(null);

  const handleBackButton = () => {
    navigation.goBack(); // 이전 페이지로 돌아가기
  };

  const handleSaveButton = async () => {
    try {
      const response = await fetch('http://localhost:8081/personal-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          dob: `${dobYear}-${dobMonth}-${dobDay}`,
          email,
          username,
          password,
          phone: `${phone1}-${phone2}-${phone3}`,
          nickname,
        }),
      });

      if (response.ok) {
        Alert.alert('수정 완료', '정보가 성공적으로 수정되었습니다.');
        navigation.goBack(); // 저장 후 메인페이지로 돌아가기
      } else {
        Alert.alert('저장 실패', '서버와의 연결에 실패했습니다.');
      }
    } catch (error) {
      Alert.alert('오류', '서버와의 연결에 실패했습니다.');
    }
  };

  const handleYearChange = (text) => {
    setDobYear(text);
    if (text.length === 4) {
      monthInputRef.current.focus();
    }
  };

  const handleMonthChange = (text) => {
    setDobMonth(text);
    if (text.length === 2) {
      dayInputRef.current.focus();
    }
  };

  const handleDayChange = (text) => {
    setDobDay(text);
  };

  const handlePhone1Change = (text) => {
    setPhone1(text);
    if (text.length === 3) {
      phone2InputRef.current.focus();
    }
  };

  const handlePhone2Change = (text) => {
    setPhone2(text);
    if (text.length === 3) {
      phone3InputRef.current.focus();
    }
  };

  const handlePhone3Change = (text) => {
    setPhone3(text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>개인정보 수정</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="홍길동"
          placeholderTextColor="#ccc"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>생년월일</Text>
        <View style={styles.dateContainer}>
          <TextInput
            style={styles.inputDate}
            value={dobYear}
            onChangeText={handleYearChange}
            placeholder="YYYY"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            maxLength={4}
          />
          <TextInput
            style={styles.inputDate}
            value={dobMonth}
            onChangeText={handleMonthChange}
            placeholder="MM"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            maxLength={2}
            ref={monthInputRef}
          />
          <TextInput
            style={styles.inputDate}
            value={dobDay}
            onChangeText={handleDayChange}
            placeholder="DD"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            maxLength={2}
            ref={dayInputRef}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="example@example.com"
          placeholderTextColor="#ccc"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>아이디</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="아이디"
          placeholderTextColor="#ccc"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="비밀번호(특수문자 포함, 8자 이상)"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>전화번호</Text>
        <View style={styles.dateContainer}>
          <TextInput
            style={styles.inputDate}
            value={phone1}
            onChangeText={handlePhone1Change}
            placeholder="010"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            maxLength={3}
          />
          <TextInput
            style={styles.inputDate}
            value={phone2}
            onChangeText={handlePhone2Change}
            placeholder="XXX"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            maxLength={3}
            ref={phone2InputRef}
          />
          <TextInput
            style={styles.inputDate}
            value={phone3}
            onChangeText={handlePhone3Change}
            placeholder="XXXX"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            maxLength={4}
            ref={phone3InputRef}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>닉네임</Text>
        <TextInput
          style={styles.input}
          value={nickname}
          onChangeText={setNickname}
          placeholder="닉네임"
          placeholderTextColor="#ccc"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveButton}>
        <Text style={styles.saveText}>수정하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#000000',
    fontSize: 14,
    color: '#000',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputDate: {
    width: '30%',
    padding: 12,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#000000',
    fontSize: 14,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveText: {
    color: '#000',
    fontSize: 16,
  },
});

export default PersonalInfoEditPage;
