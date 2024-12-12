import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.text}>회원가입</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});

export default SubmitButton;