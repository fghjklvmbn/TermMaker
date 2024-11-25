const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 게시글 작성
router.post('/create', async (req, res) => {
  const { category, title, content, author_id, attachment_url } = req.body;
  try {
    const [result] = await db.execute(
      `INSERT INTO community (category, title, content, author_id, attachment_url) 
       VALUES (?, ?, ?, ?, ?)`,
      [category, title, content, author_id, attachment_url]
    );
    res.status(201).json({ message: 'Post created', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// 게시글 조회
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.execute('SELECT * FROM community WHERE id = ?', [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});

// 게시글 목록 조회
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM community ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

module.exports = router;
