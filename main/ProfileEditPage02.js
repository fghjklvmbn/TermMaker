import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileEditPage02 = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState('https://example.com/default-profile.jpg'); // 기본 이미지 URL

  const handleCancel = () => {
    navigation.goBack(); // 이전 페이지로 돌아가기
  };

  const handleSave = () => {
    // 입력 값 확인
    if (!nickname || !bio) {
      alert('모든 정보를 입력해주세요.');
      return;
    }

    // 프로필 수정 처리 로직 추가
    console.log('프로필 수정');
    alert('프로필이 수정되었습니다.');
    navigation.goBack(); // 수정 후 이전 페이지로 이동
  };

  const handleImageChange = () => {
    // 사진 변경 로직 (예: 이미지 선택기 사용)
    setProfileImage('https://example.com/new-profile.jpg'); // 새로운 이미지 URL로 변경
  };

  return (
    <View style={styles.container}>
      {/* 이전 버튼과 텍스트를 하나의 row로 배치 */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Icon name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>프로필 수정</Text>
      </View>

      {/* 프로필 사진 */}
      <TouchableOpacity onPress={handleImageChange} style={styles.profileImageContainer}>
        <View style={styles.profileImageBackground}>
          <Image
            source={{ uri: profileImage }}
            style={styles.profileImage}
          />
          {/* 원형 버튼에 + 아이콘을 중앙에 배치 */}
          <View style={styles.addButton}>
            <Icon name="add" size={30} color="#fff" />
          </View>
        </View>
      </TouchableOpacity>

      {/* 닉네임 텍스트 */}
      <Text style={styles.label}>닉네임</Text>
      <TextInput
        style={styles.input}
        value={nickname}
        onChangeText={setNickname}
        placeholder="닉네임 입력"
        placeholderTextColor="#ccc"
      />

      {/* 소개 내용 텍스트 */}
      <Text style={styles.label}>소개내용</Text>
      <TextInput
        style={[styles.input, styles.bioInput]}
        value={bio}
        onChangeText={setBio}
        placeholder="소개내용 입력"
        placeholderTextColor="#ccc"
        multiline
      />

      {/* 수정하기 버튼 */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>수정하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  cancelButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  profileImageContainer: {
    marginVertical: 20, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageBackground: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // 아이콘을 배치하기 위해 relative 설정
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000', // 원형 배경
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'flex-start',
    color: '#000',
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 30,
    fontSize: 14,
    color: '#000',
  },
  bioInput: {
    height: 150,
  },
  saveButton: {
    width: '80%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: 18,
    marginTop: 20, 
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ProfileEditPage02;

