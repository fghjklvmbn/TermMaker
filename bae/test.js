import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [message, setMessage] = React.useState('Hello, Expo Bare Workflow!');

  const changeMessage = () => {
    setMessage('Button Pressed!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Press Me" onPress={changeMessage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
