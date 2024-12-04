import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BoardWrite = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    console.log('제목:', title);
    console.log('내용:', content);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>게시글 작성</Text>

      <View style={styles.contentBox}>
        <TextInput
          style={styles.inputTitle}
          placeholder="제목을 입력해주세요."
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.inputContent}
          placeholder="내용을 입력해주세요."
          placeholderTextColor="#999"
          value={content}
          onChangeText={setContent}
          multiline
          textAlignVertical="top"
        />

        <View style={styles.fileButtonContainer}>
          <TouchableOpacity style={styles.fileButton}>
            <Text style={styles.fileButtonText}>첨부파일 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fileButton}>
            <Text style={styles.fileButtonText}>첨부파일 2</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>등록</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20, // 전체 상단 여백
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15, // 제목 간격 조정
  },
  contentBox: {
    backgroundColor: '#d9d9d9',
    borderRadius: 30,
    width: '100%',
    padding: 20,
    marginBottom: 20, // 간격 조정
    alignItems: 'center',
    height: 500, // contentBox 높이 확장
  },
  inputTitle: {
    height: 60, // 제목 입력란 높이 확장
    borderColor: '#000',
    borderWidth: 2, // 테두리 선 더 굵게
    borderRadius: 30, // 모서리 둥글게
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 20, // 제목과 내용 사이의 간격 넓힘
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  inputContent: {
    borderColor: '#000',
    borderWidth: 2, // 테두리 선 더 굵게
    borderRadius: 30, // 모서리 둥글게
    width: '100%',
    height: 300, // 내용 입력란 높이 확장
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: '#FFF',
    marginBottom: 20,
    fontSize: 16,
  },
  fileButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20, // 버튼들 간의 간격을 넓힘
  },
  fileButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 14, // 버튼 높이 늘림
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
  fileButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 80, // 버튼 하단으로 내려감
  },
  saveButton: {
    backgroundColor: '#D6D6D6',
    borderRadius: 10,
    paddingVertical: 16, // 버튼 크기 키움
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
  },
  cancelButton: {
    backgroundColor: '#D6D6D6',
    borderRadius: 10,
    paddingVertical: 16, // 버튼 크기 키움
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default BoardWrite;
