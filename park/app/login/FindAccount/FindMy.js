import React, { useState } from 'react';
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

const FindMy = ( navigation, find_id, find_pw ) => {
  const [isIdFind, setIsIdFind] = useState(true); // true: 아이디 찾기, false: 비밀번호 찾기
  const [form, setForm] = useState({
    name: '',
    email: '',
    userId: '', // 비밀번호 찾기 시 필요한 아이디
  });

  // 아이디 선택시 텍스트 전환
  const isId = (find_id) => {
    if(find_id == true){
      isIdFind = useState(true);
      setIsIdFind = useState(true);
    }
  }

  // 비밀번호 선택시 텍스트 전환
  const isPW = (find_pw) => {
    
  }

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

  // BackButton 클릭 시 동작 정의 (테스트용 로그 추가)
  const handleBackButtonPress = () => {
    navigation.goBack();
    // 여기서 원하는 동작을 추가 (예: 네비게이션 이동, 이전 화면으로 돌아가기 등)
  };

  return (
    <View style={styles.screenContainer}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity
        style={styles.backArrow}
        onPress={handleBackButtonPress} // 버튼 클릭 시 동작
      >
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
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, // 화면 전체를 차지하도록 설정
    backgroundColor: '#fff',
  },
  backArrow: {
    // position: 'absolute', // 부모 View 기준으로 절대 위치 지정
    top: 70, 
    left: 20, 
    // zIndex: 10, // 다른 요소 위로 배치
    // padding: 10, // 클릭 가능한 영역 크기 늘리기
    backgroundColor: 'transparent', // 배경을 투명으로 설정하여 시각적으로는 보이지 않지만 클릭할 수 있게
  },
  container: {
    flex: 1, // 나머지 공간을 차지
    justifyContent: 'center', // 세로로 중앙 정렬
    alignItems: 'center', // 가로로 중앙 정렬
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center', // 제목은 중앙 정렬 유지
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
