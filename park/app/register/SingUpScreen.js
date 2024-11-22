import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BackButton from '../univ/BackButton';
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
      <BackButton onPress={handleBack} />
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
});

export default SignUpScreen;