import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import BottomNavBar from '../univ/navigation';
import Header from '../univ/header';

const { width } = Dimensions.get('window');

const BoardScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 데이터 불러오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // GET 요청으로 데이터 가져오기
        const response = await axios.get('http://dsapoi881.duckdns.org:3123/api/board');
        setPosts(response.data); // 받아온 데이터를 상태에 저장
      } catch (error) {
        console.error('게시글을 불러오는 중 오류 발생:', error);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchPosts();
  }, []);

  const getUserName = async (userId) => {
    if (usernames[userId]) return usernames[userId]; // 이미 캐싱된 경우 반환

    try {
      const response = await axios.get(`http://dsapoi881.duckdns.org:3123/api/user/${userId}`);
      const username = response.data.username;

      // 캐싱
      setUsernames((prev) => ({ ...prev, [userId]: username }));
      return username;
    } catch (error) {
      console.error(`작성자 이름을 불러오는 중 오류 발생 (ID: ${userId}):`, error);
      return '알 수 없음';
    }
  };

  const renderItem = ({ item }) => {
    const [username, setUsername] = useState("");

    useEffect(() => {
      const fetchUsername = async () => {
        const name = await getUserName(item.author_id); // 작성자 ID로 이름 가져오기
        setUsername(name);
      };

      fetchUsername();
    }, [item.author_id]);

    return (
    <TouchableOpacity
      style={styles.post}
      onPress={() => navigation.navigate('BoardDetail', { postId: item.id })}
      accessibilityLabel={`${item.title} 게시글 열기`}
    >
      <View style={styles.postHeader}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postUser}>작성자: {{username}}</Text>
      </View>
      <View style={styles.postFooter}>
        <Text style={styles.iconText}>💬 {item.comment_counts}</Text>
        <Text style={styles.iconText}>👁️ {item.views}</Text>
        <Text style={styles.postDate}>{new Date(item.created_at).toLocaleDateString()}</Text>
      </View>
    </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* Header */}
      <View style={styles.header}>
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
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // 숫자로 된 id를 문자열로 변환
        contentContainerStyle={styles.postsContainer}
        initialNumToRender={5} // 성능 최적화
      />

      {/* Bottom Navigation */}
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // 이전 스타일 정의를 유지합니다.
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
    marginBottom: 60,
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
});

export default BoardScreen;