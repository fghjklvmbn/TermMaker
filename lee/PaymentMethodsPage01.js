import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

const PaymentMethodsPage01 = () => {
  const handlePress = async (action) => {
    try {
      // Express.js 서버로 요청 보내기
      const response = await fetch('http://localhost:8081', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action }),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert('Success', result.message);
      } else {
        Alert.alert('Error', 'Something went wrong.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>결제수단</Text>
      {/* 결제수단 리스트 */}
      {['삼성(2847)'].map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.button}
          onPress={() => handlePress(item)}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
      {/* 결제수단 추가 버튼 */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handlePress('결제수단 추가')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 33,
      fontWeight: 'bold',
      marginBottom: 90,
    },
    button: {
      width: '80%',
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      paddingVertical: 30,
      marginVertical: 10,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      color: '#000',
    },
    addButton: {
      width: '80%',
      backgroundColor: '#D9D9D9',
      borderRadius: 10,
      paddingVertical: 50,
      marginTop: 20,
      alignItems: 'center',
    },
    addButtonText: {
      fontSize: 16,
      color: '#000',
    },
  });
  
export default PaymentMethodsPage01;
