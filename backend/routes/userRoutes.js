const express = require('express');
const { register, login, refreshToken, findPassword, findUsername } = require('../controllers/userController');
const router = express.Router();

// 회원가입
router.post('/register', register);

// 로그인
router.post('/login', login);

// 리프레쉬 토큰
router.post('/refresh-token', refreshToken);

// 아이디 찾기
router.post('/find-username', findUsername);

// 비밀번호 찾기
router.post('/find-password', findPassword);

module.exports = router;