const Board = require('../models/board'); // 모델 불러오기
const db = require('../config/db');
require('dotenv').config(); // 환경변수 사용


exports.createPost = async (req, res) => {
  try{
    const {}
  }

}

// 예시 회원가입
exports.register = async (req, res) => {
  try {
    const { name, email, username, birthday, password, phonenum, nick } = req.body;

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 사용자 생성
    await User.create({
      username,
      password: hashedPassword, // 해싱된 비밀번호 저장
      name,
      email,
      nickname: nick,
      birthday,
      phoneNumber: phonenum,
    });

    res.status(201).json({ message: '정상적으로 가입되었습니다!' });
  } catch (err) {
    res.status(500).json({ message: '가입하는 중 오류가 발생하였습니다.', error: err.message });
  }
};




// 게시글 작성
const createPost = async (req, res) => {
  const { category, title, content, attachment_url } = req.body;

  try {
    await db.execute(
      'INSERT INTO community (category, title, content, author_id, attachment_url) VALUES (?, ?, ?, ?, ?)',
      [category, title, content, req.user.id, attachment_url]
    );

    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create post' });
  }
};

// 게시글 조회
const getPosts = async (req, res) => {
  try {
    const [posts] = await db.execute('SELECT * FROM community');
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

module.exports = { createPost, getPosts };