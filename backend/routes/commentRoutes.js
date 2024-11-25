const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 댓글 추가
router.post('/add', async (req, res) => {
  const { community_id, user_id, content } = req.body;
  try {
    const [result] = await db.execute(
      `INSERT INTO comment (community_id, user_id, content) 
       VALUES (?, ?, ?)`,
      [community_id, user_id, content]
    );
    res.status(201).json({ message: 'Comment added', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

// 게시글별 댓글 조회
router.get('/post/:postId', async (req, res) => {
  const { postId } = req.params;
  try {
    const [rows] = await db.execute(
      'SELECT * FROM comment WHERE community_id = ? ORDER BY created_at ASC',
      [postId]
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

module.exports = router;
