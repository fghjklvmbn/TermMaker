import React from 'react';
import { View, StyleSheet, Text, SafeAreaViewComponent } from 'react-native';
import BackButton from '../../univ/BackButton';
import SignUpForm from './SignUpForm';
import SubmitButton from './SubmitButton';
import Login from '../Login';
import { SafeAreaInsetsContext, SafeAreaView } from 'react-native-safe-area-context';

const SignUpScreen = ({ }) => {
  // const handleBack = () => {
  //   navigation.goBack(Login);
  // };

  const handleSubmit = () => {
    console.log('회원가입 요청');
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton style={styles.backButton} onPress={() => navigation.goBack()} />
      <Text style={styles.title}>회원가입</Text>
      <SignUpForm />
      <SubmitButton onPress={handleSubmit} />
    </SafeAreaView>
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