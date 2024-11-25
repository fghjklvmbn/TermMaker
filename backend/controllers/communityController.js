const db = require('../config/db');

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