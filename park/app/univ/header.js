import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../navigation'; // AuthContext 가져오기

const Header = () => {
  const { logout } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  // AsyncStorage에서 사용자 이름 가져오기
  const fetchUsername = async () => {
    const storedUsername = await AsyncStorage.getItem('username');
    setUsername(storedUsername || 'User');
  };

  // 로그아웃 처리
  const handleLogout = async () => {
    logout();
  };

  // 사용자 메뉴 버튼 클릭 시 호출
  const handleProfilePress = () => {
    fetchUsername(); // 사용자 이름 업데이트
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>ReTrack</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileIcon}
            onPress={handleProfilePress}
          >
            <Ionicons name="person-circle-outline" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 사용자 메뉴 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalUsername}>안녕하세요, {username}님!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('MyPage'); // 마이페이지로 이동
              }}
            >
              <Text style={styles.modalButtonText}>마이페이지로 이동</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleLogout}
            >
              <Text style={styles.modalButtonText}>로그아웃</Text>
            </TouchableOpacity>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>닫기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 27,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  profileIcon: {
    marginLeft: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalUsername: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: 'gray',
    fontSize: 14,
  },
});

export default Header;
