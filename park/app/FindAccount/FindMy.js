import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const FindMy = () => {
  const [isIdFind, setIsIdFind] = useState(true); // true: 아이디 찾기, false: 비밀번호 찾기
  const [form, setForm] = useState({
    name: '',
    email: '',
    userId: '', // 비밀번호 찾기 시 필요한 아이디
  });

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    if (isIdFind) {
      console.log('아이디 찾기:', form.name, form.email);
    } else {
      console.log('비밀번호 찾기:', form.userId, form.email);
    }
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <TouchableOpacity onPress={() => console.log('뒤로가기')}>
        <Text style={styles.backArrow}>{'←'}</Text>
      </TouchableOpacity>

      {/* 제목 */}
      <Text style={styles.title}>{isIdFind ? '아이디 찾기' : '비밀번호 찾기'}</Text>

      {/* 입력 폼 */}
      {isIdFind ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="이름"
            value={form.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="이메일"
            value={form.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="아이디"
            value={form.userId}
            onChangeText={(text) => handleInputChange('userId', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="이메일"
            value={form.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </>
      )}

      {/* 확인 버튼 */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>

      {/* 아이디/비밀번호 찾기 전환 */}
      <TouchableOpacity
        style={styles.switch}
        onPress={() => setIsIdFind((prev) => !prev)}
      >
        <Text style={styles.switchText}>
          {isIdFind ? '비밀번호 찾기로 이동' : '아이디 찾기로 이동'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: width * 0.9,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 12,
    paddingHorizontal: width * 0.3,
    borderRadius: 20,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  switch: {
    marginTop: 16,
  },
  switchText: {
    fontSize: 14,
    color: '#007BFF',
  },
});

export default FindMy;