import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

function BackButton({ navigation }) {
  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("BoardScreen")}>
      <Icon name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
}

function CommentInput({ postId, setComments, showErrorModal }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      const newComment = {
        id: Math.random().toString(),
        author: '새로운 사용자',
        comment: commentText,
      };
      setComments(prevComments => [...prevComments, newComment]);
      setCommentText('');
    } else {
      showErrorModal('댓글을 입력하세요.');
    }
  };

  return (
    <View style={styles.commentInputContainer}>
      <TextInput
        style={styles.commentInput}
        value={commentText}
        onChangeText={setCommentText}
        placeholder="댓글을 입력하세요."
        placeholderTextColor="#B0B0B0"
      />
      <TouchableOpacity onPress={handleCommentSubmit} style={styles.sendButton}>
        <Image
          source={require('../../assets/send.png')}
          style={styles.sendButton}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function BoardInfo({ navigation, route }) {
  const [comments, setComments] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // 전달받은 post 정보
  const post = route.params?.post;

  const showErrorModal = (message) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />

      <Text style={styles.logo}>CULISO 게시판</Text>

      {/* 게시물과 댓글 전체를 감싸는 컨테이너 */}
      <View style={styles.grayContainer}>

        {post && (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
            <View style={styles.postInfoRow}>
              <Text style={styles.iconText}>👁️ {post.views}</Text>
              <Text style={styles.authorText}>{post.author}님</Text>
            </View>
          </View>
        )}

        <Text style={styles.commentTitle}>💬 댓글 {comments.length}</Text>

        <View style={styles.commentListContainer}>
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.commentContainer}>
                <Text style={styles.commentAuthor}>{item.author}</Text>
                <Text style={styles.commentContent}>{item.comment}</Text>
              </View>
            )}
          />
        </View>
      </View>

      <CommentInput postId={post?.id} setComments={setComments} showErrorModal={showErrorModal} />

      <ErrorModal
        modalVisible={modalVisible}
        modalMessage={modalMessage}
        closeModal={closeModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  backButton: {
    marginBottom: 10,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  grayContainer: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  postContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    borderColor: '#333333',
    borderWidth: 2,
    marginBottom: 20,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  postContent: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
  postInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    color: '#666666',
  },
  authorText: {
    fontSize: 14,
    color: '#666666',
  },
  commentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  commentListContainer: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 10,
  },
  commentContainer: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  commentAuthor: {
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  commentContent: {
    fontSize: 14,
    color: '#666666',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#333333',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  sendButton: {
    width: -20,
    height: -20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
  },
});
