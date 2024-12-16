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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTitle}
          placeholder="제목을 입력해주세요."
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.inputContent}
          placeholder="내용 및 첨부파일"
          placeholderTextColor="#999"
          value={content}
          onChangeText={setContent}
          multiline
          textAlignVertical="top"
        />
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
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputTitle: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  inputContent: {
    height: 300,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  saveButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default BoardWrite;
