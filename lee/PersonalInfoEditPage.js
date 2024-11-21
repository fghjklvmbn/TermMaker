import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const PersonalInfoEditPage = ({ navigation }) => {
    const [name, setName] = useState('');
    const [dobYear, setDobYear] = useState('');
    const [dobMonth, setDobMonth] = useState('');
    const [dobDay, setDobDay] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [phone3, setPhone3] = useState('');
    const [nickname, setNickname] = useState('');

    // 각 입력 필드를 참조
    const monthInputRef = useRef(null);
    const dayInputRef = useRef(null);
    const phone2InputRef = useRef(null);
    const phone3InputRef = useRef(null);

    const handleBackButton = () => {
        navigation.goBack(); // 이전 페이지로 돌아가기
    };

    const handleSaveButton = () => {
        // 저장 로직
        console.log('정보 수정 완료');
    };

    const handleYearChange = (text) => {
        setDobYear(text);
        if (text.length === 4) {
            monthInputRef.current.focus();
        }
    };

    const handleMonthChange = (text) => {
        setDobMonth(text);
        if (text.length === 2) {
            dayInputRef.current.focus();
        }
    };

    const handleDayChange = (text) => {
        setDobDay(text);
    };

    const handlePhone1Change = (text) => {
        setPhone1(text);
        if (text.length === 3) {
            phone2InputRef.current.focus();
        }
    };

    const handlePhone2Change = (text) => {
        setPhone2(text);
        if (text.length === 3) {
            phone3InputRef.current.focus();
        }
    };

    const handlePhone3Change = (text) => {
        setPhone3(text);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
                <Text style={styles.backText}>이전</Text>
            </TouchableOpacity>

            <Text style={styles.title}>개인정보 수정</Text>

            {/* 이름 */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>이름</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="홍길동"
                    placeholderTextColor="#ccc"
                />
            </View>

            {/* 생년월일 */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>생년월일</Text>
                <View style={styles.dateContainer}>
                    <TextInput
                        style={styles.inputDate}
                        value={dobYear}
                        onChangeText={handleYearChange}
                        placeholder="YYYY"
                        placeholderTextColor="#ccc"
                        keyboardType="numeric"
                        maxLength={4} // 최대 4자리 입력
                    />
                    <TextInput
                        style={styles.inputDate}
                        value={dobMonth}
                        onChangeText={handleMonthChange}
                        placeholder="MM"
                        placeholderTextColor="#ccc"
                        keyboardType="numeric"
                        maxLength={2} // 최대 2자리 입력
                        ref={monthInputRef} // 월 입력 필드 참조
                    />
                    <TextInput
                        style={styles.inputDate}
                        value={dobDay}
                        onChangeText={handleDayChange}
                        placeholder="DD"
                        placeholderTextColor="#ccc"
                        keyboardType="numeric"
                        maxLength={2} // 최대 2자리 입력
                        ref={dayInputRef} // 일 입력 필드 참조
                    />
                </View>
            </View>

            {/* 이메일 */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>이메일</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@example.com"
                    placeholderTextColor="#ccc"
                />
            </View>

            {/* 아이디 */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>아이디</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="아이디"
                    placeholderTextColor="#ccc"
                />
            </View>

            {/* 비밀번호 */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>비밀번호</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="비밀번호(특수문자 포함, 8자 이상)"
                    placeholderTextColor="#ccc"
                    secureTextEntry
                />
            </View>

            {/* 전화번호 */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>전화번호</Text>
                <View style={styles.dateContainer}>
                    <TextInput
                        style={styles.inputDate}
                        value={phone1}
                        onChangeText={handlePhone1Change}
                        placeholder="010"
                        placeholderTextColor="#ccc"
                        keyboardType="numeric"
                        maxLength={3}
                    />
                    <TextInput
                        style={styles.inputDate}
                        value={phone2}
                        onChangeText={handlePhone2Change}
                        placeholder="XXX"
                        placeholderTextColor="#ccc"
                        keyboardType="numeric"
                        maxLength={3}
                        ref={phone2InputRef} // 두 번째 전화번호 필드 참조
                    />
                    <TextInput
                        style={styles.inputDate}
                        value={phone3}
                        onChangeText={handlePhone3Change}
                        placeholder="XXXX"
                        placeholderTextColor="#ccc"
                        keyboardType="numeric"
                        maxLength={3}
                        ref={phone3InputRef} // 세 번째 전화번호 필드 참조
                    />
                </View>
            </View>

            {/* 닉네임 */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>닉네임</Text>
                <TextInput
                    style={styles.input}
                    value={nickname}
                    onChangeText={setNickname}
                    placeholder="닉네임"
                    placeholderTextColor="#ccc"
                />
            </View>

            {/* 수정하기 버튼 */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveButton}>
                <Text style={styles.saveText}>수정하기</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    backButton: {
        marginBottom: 10,
    },
    backText: {
        fontSize: 14,
        color: '#000',
        textDecorationLine: 'underline',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 8,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        color: '#000',
    },
    input: {
        width: '100%',
        padding: 12,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#000000',
        fontSize: 14,
        color: '#000',
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputDate: {
        width: '30%',
        padding: 12,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#000000',
        fontSize: 14,
        color: '#000',
    },
    saveButton: {
        backgroundColor: '#D9D9D9',
        paddingVertical: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
        width: '66%',
        alignSelf: 'center',
    },
    saveText: {
        color: '#000',
        fontSize: 16,
    },
});

export default PersonalInfoEditPage;
