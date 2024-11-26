const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

// 보호된 엔드포인트
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const [userRows] = await db.execute('SELECT * FROM user WHERE id = ?', [req.user.id]);
    if (userRows.length === 0) {
      return res.status(404).json({ error: '유저가 발견되지 않았습니다.' });
    }

    res.status(200).json(userRows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '사용자 프로필을 새로고침 하지 못하였습니다.' });
  }
});

module.exports = router;
