import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const { width } = Dimensions.get('window');

// Sample data for posts
const data = [
  { id: '1', title: '자유게시판 첫 번째 글', user: '김철수님', views: 134, comments: 23, date: '2024.11.19' },
  { id: '2', title: 'React Native 사용법', user: '박영희님', views: 89, comments: 12, date: '2024.11.18' },
  { id: '3', title: '게시글 작성 예시', user: '이민호님', views: 56, comments: 8, date: '2024.11.17' },
  { id: '4', title: '오늘 날씨 정말 좋네요!', user: '김은정님', views: 152, comments: 27, date: '2024.11.16' },
  { id: '5', title: '리액트 네이티브 관련 질문', user: '최지우님', views: 240, comments: 45, date: '2024.11.15' },
  { id: '6', title: '개발자 스터디 모집', user: '정석환님', views: 310, comments: 67, date: '2024.11.14' },
];

const BoardScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.post}
      onPress={() => navigation.navigate('BoardDetail', { postId: item.id })} // 추가
      accessibilityLabel={`${item.title} 게시글 열기`}
    >
      <View style={styles.postHeader}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postUser}>{item.user}</Text>
      </View>
      <View style={styles.postFooter}>
        <Text style={styles.iconText}>💬 {item.comments}</Text>
        <Text style={styles.iconText}>👁️ {item.views}</Text>
        <Text style={styles.postDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>ReTrack</Text>
        <Text style={styles.boardTitle}>자유 게시판</Text>
        <TouchableOpacity
          style={styles.writeButton}
          onPress={() => navigation.navigate('BoardWrite')}
          accessibilityLabel="게시글 작성하기"
        >
          <Text style={styles.writeButtonText}>작성</Text>
        </TouchableOpacity>
      </View>

      {/* Posts List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.postsContainer}
        initialNumToRender={5} // 성능 최적화
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { title: '홈', route: 'MainScreen' },
          { title: '대여/반납', route: 'RentalScreen' },
          { title: '커뮤니티', route: 'CommunityScreen' },
          { title: '설정', route: 'SettingsScreen' },
        ].map((nav, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navButton}
            onPress={() => navigation.navigate(nav.route)}
            accessibilityLabel={`${nav.title} 화면으로 이동`}
          >
            <Text style={styles.navButtonText}>{nav.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderColor: '#CCC',
    },
    logo: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    boardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    writeButton: {
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 15,
    },
    writeButtonText: {
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold',
    },
    postsContainer: {
      paddingHorizontal: 15,
      marginBottom: 60, // 하단 네비게이션과의 거리 확보
    },
    post: {
      backgroundColor: '#FFF',
      borderRadius: 8,
      padding: 15,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    postHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    postTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    postUser: {
      fontSize: 14,
      color: '#555',
    },
    postFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconText: {
      fontSize: 14,
      color: '#555',
    },
    postDate: {
      fontSize: 12,
      color: '#888',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: 1,
      borderColor: '#ccc',
      paddingVertical: 10,
      backgroundColor: '#D9D9D9',
      position: 'absolute', // 화면의 고정 위치를 설정
      bottom: 0, // 화면 맨 아래에 배치
      width: '100%', // 전체 화면 너비를 차지
    },
    navButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.2,
      paddingVertical: 10,
    },
    navButtonText: {
      fontSize: 16,
      color: '#000',
    },
  });
  

export default BoardScreen;
