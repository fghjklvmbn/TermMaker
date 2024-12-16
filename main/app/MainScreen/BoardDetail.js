import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BottomNavBar from '../univ/navigation';
import Header from '../univ/header';

const BoardDetail = ({ route }) => {
  const { postId } = route.params; // 게시글 ID 가져오기

  // 샘플 게시글 데이터
  const post = {
    id: postId,
    title: `게시글 ${postId}의 제목입니다`,
    content: `게시글 ${postId}의 내용입니다. 자세한 내용이 여기에 들어갑니다.`,
    user: '작성자 이름',
    date: '2024.11.19',
    views: 123,
    commentsCount: 12,
  };

  // 샘플 댓글 데이터
  const [comments, setComments] = useState([
    { id: '1', user: 'A', content: '댓글입니다.', date: '2024.11.19' },
    { id: '2', user: 'B', content: '댓글입니다.', date: '2024.11.18' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentData = {
        id: String(comments.length + 1),
        user: '현재 사용자', // 실제 앱에서는 사용자 이름을 받아와야 함
        content: newComment,
        date: new Date().toISOString().split('T')[0],
      };
      setComments([newCommentData, ...comments]);
      setNewComment('');
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.comment}>
      <Text style={styles.commentUser}>{item.user}</Text>
      <Text style={styles.commentContent}>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* 게시글 내용 */}
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postContent}>{post.content}</Text>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>첨부파일 다운받기</Text>
        </TouchableOpacity>

        <View style={styles.postFooter}>
          <Text style={styles.postViews}>👁️ {post.views}</Text>
          <Text style={styles.postUser}>{post.user}</Text>
        </View>
      </View>

      {/* 댓글 섹션 */}
      <Text style={styles.commentHeader}>💬 댓글 {post.commentsCount}</Text>

      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.commentsContainer}
      />

      {/* 댓글 작성란 */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        style={styles.commentInputContainer}
      >
        <TextInput
          style={styles.commentInput}
          placeholder="댓글을 입력하세요."
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity
          style={styles.commentButton}
          onPress={handleAddComment}
          accessibilityLabel="댓글 작성하기"
        >
          <Text style={styles.commentButtonText}>✈️</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* 하단 네비게이션 */}
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postContent: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  downloadButton: {
    marginBottom: 15,
  },
  downloadText: {
    fontSize: 14,
    color: '#007bff',
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postViews: {
    fontSize: 14,
    color: '#555',
  },
  postUser: {
    fontSize: 14,
    color: '#555',
  },
  commentHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  commentsContainer: {
    paddingHorizontal: 15,
    paddingBottom: 60,
  },
  comment: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  commentUser: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentContent: {
    fontSize: 14,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 14,
    marginRight: 10,
  },
  commentButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BoardDetail;
