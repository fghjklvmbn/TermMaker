import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
// 회원탈퇴 확인 페이지
const WithdrawalErrorPage = ({ navigation }) => {
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
            <View style={styles.inputContainer}>
                <Text style={styles.label}>비밀번호 입력</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="비밀번호를 입력하세요."
                    placeholderTextColor="#ccc"
                    secureTextEntry
                />
            </View>

            {/* 오류 메시지 */}
            <Text style={styles.errorMessage}>
                비밀번호 혹은 문장이 올바르지 않습니다.{"\n"}다시 입력해 주세요.
            </Text>

            {/* 버튼 영역 */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                    <Text style={styles.buttonText}>확인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.cancelButton]}
                    onPress={handleCancel}
                >
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
        fontSize: 33,
        fontWeight: 'bold',
        marginBottom: 60,
    },
    subtitle: {
        fontSize: 18,
        color: '#000',
        marginBottom: 40,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        padding: 12,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#ccc',
        fontSize: 14,
        color: '#000',
    },
    errorMessage: {
        fontSize: 14,
        color: '#A03737',
        textAlign: 'center',
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 15,
    },
    button: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        paddingVertical: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    cancelButton: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
    },
});

export default WithdrawalErrorPage;
