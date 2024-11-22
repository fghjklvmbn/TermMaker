import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BackButton from '../../univ/BackButton';
import SignUpForm from './SignUpForm';
import SubmitButton from './SubmitButton';

const SignUpScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    console.log('회원가입 요청');
  };

  return (
    <View style={styles.container}>
      <BackButton style={styles.backbutton} onPress={handleBack} />
      <Text style={styles.title}>회원가입</Text>
      <SignUpForm />
      <SubmitButton onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  backbutton : {
  backgroundColor: 'transparent', // 배경을 투명으로 설정하여 시각적으로는 보이지 않지만 클릭할 수 있게
  }
});

export default SignUpScreen;