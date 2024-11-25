const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/db');
const { jwtSecret, jwtExpiresIn } = require('../config/config');

const router = express.Router();

// 로그인 엔드포인트
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 사용자 조회
    const [userRows] = await db.execute('SELECT * FROM user WHERE username = ?', [username]);
    if (userRows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const user = userRows[0];

    // 비밀번호 확인
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // 토큰 생성
    const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret, { expiresIn: jwtExpiresIn });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

router.get('/verify', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    res.status(200).json({ message: 'Token is valid', user });
  });
});


module.exports = router;
