import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const WithdrawalPage = ({ navigation }) => {
    const [password, setPassword] = useState('');

    const handleCancel = () => {
        navigation.goBack(); // 이전 페이지로 돌아가기
    };

    const handleConfirm = () => {
        if (password.trim() === '') {
            alert('비밀번호를 입력해주세요.');
            return;
        }
        // 회원탈퇴 처리 로직 추가
        console.log('회원 탈퇴 처리');
        alert('회원탈퇴가 완료되었습니다.');
        navigation.goBack(); // 탈퇴 후 이전 페이지로 이동
    };

    return (
        <View style={styles.container}>
            {/* 상단 텍스트 */}
            <Text style={styles.title}>회원탈퇴</Text>

            {/* 설명 텍스트 */}
            <Text style={styles.subtitle}>정말로 회원 탈퇴하시겠습니까?</Text>

            {/* 비밀번호 입력 */}
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="비밀번호 입력"
                placeholderTextColor="#ccc"
                secureTextEntry
            />

            {/* 버튼 */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                    <Text style={styles.buttonText}>확인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
                    <Text style={styles.buttonText}>취소</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    title: {
        fontSize: 33, // 기존보다 크게
        fontWeight: 'bold',
        marginBottom: 90,
      },
    subtitle: {
        fontSize: 25,
        color: '#000',
        marginBottom: 50,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 12,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#ccc',
        fontSize: 14,
        color: '#000',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
    },
});

export default WithdrawalPage