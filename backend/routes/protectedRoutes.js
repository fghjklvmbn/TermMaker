const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

// 보호된 엔드포인트
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const [userRows] = await db.execute('SELECT * FROM user WHERE id = ?', [req.user.id]);
    if (userRows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(userRows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

module.exports = router;
