import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PaymentMethodsPage01 = ({ navigation }) => {
  const handlePress = async (action) => {
    try {
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

  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    } else {
      Alert.alert('Back', '이전 화면으로 이동합니다.');
    }
  };

  const navigateToPaymentMethodsPage02 = () => {
    navigation.navigate('PaymentMethodsPage02');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>결제수단</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PaymentMethodsPage03')}
        >
          <Text style={styles.buttonText}>삼성(2847)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={navigateToPaymentMethodsPage02}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 30,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: -10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 20,
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
    paddingVertical: 40,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PaymentMethodsPage01;


