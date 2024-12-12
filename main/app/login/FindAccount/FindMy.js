import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import BackButton from '../../univ/BackButton';

const { width } = Dimensions.get('window');

const FindMy = ({ navigation, route }) => {
  const { find_id } = route.params; // 네비게이션 파라미터에서 find_id 값 받기
  const [isIdFind, setIsIdFind] = useState(find_id); // 받은 값으로 상태 초기화
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

  // 뒤로가기 버튼 클릭 시 동작 정의
  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screenContainer}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity style={styles.backArrow} onPress={handleBackButtonPress}>
        <BackButton /> 
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{isIdFind ? '아이디 찾기' : '비밀번호 찾기'}</Text>

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

        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.switch}
          onPress={() => setIsIdFind((prev) => !prev)}
        >
          <Text style={styles.switchText}>
            {isIdFind ? '비밀번호 찾기로 이동' : '아이디 찾기로 이동'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backArrow: {
    top: 70,
    left: 20,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 48,
    alignItems: 'center',
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
