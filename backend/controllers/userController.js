const User = require('../models/user'); // 모델 불러오기
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config(); // 환경변수 사용

// 회원가입
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

// 로그인
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // 사용자 검색
    const user = await User.findByUsername(username);
    if (!user) return res.status(404).json({ message: '유저가 없습니다' });

    // 비밀번호 검증
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: '아이디 및 비밀번호가 일치하지 않습니다' });

    // 액세스 토큰 생성
    const accessToken = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    // 리프레시 토큰 생성
    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET_REFRESH,
      { expiresIn: '7d' }
    );

    // 리프레시 토큰 저장
    await User.updateRefreshToken(user.id, refreshToken);

    // 응답 반환
    res.status(200).json({
      message: '로그인 성공!',
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(500).json({ message: '로그인 실패', error: err.message });
  }
};


// 리프레시 토큰을 사용한 액세스 토큰 갱신
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) return res.status(401).json({ message: '리프레시 토큰이 제공되지 않았습니다.' });

    // 리프레시 토큰 검증
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    // 사용자 정보 검색
    const user = await User.findById(decoded.id);
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ message: '유효하지 않은 리프레시 토큰입니다.' });
    }

    // 새로운 액세스 토큰 생성
    const newAccessToken = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (err) {
    res.status(403).json({ message: '리프레시 토큰 검증 실패', error: err.message });
  }
};

// 아이디 찾기
exports.findUsername = async (req, res) => {
  try {
    const { name, email } = req.body;

    // 이메일로 사용자 검색
    const user = await User.findByEmail(email);
    if (!user) return res.status(404).json({ message: '해당 이메일에 해당하는 유저가 없습니다.' });

    // 이름이 일치하는지 확인
    if (user.name !== name) {
      return res.status(400).json({ message: '이름이 일치하지 않습니다.' });
    }

    // 아이디 반환
    res.status(200).json({ message: '아이디 찾기 성공', username: user.username });
  } catch (err) {
    res.status(500).json({ message: '아이디 찾기 실패', error: err.message });
  }
};

// 비밀번호 찾기
exports.findPassword = async (req, res) => {
  try {
    const { username, email } = req.body;

    // 아이디로 사용자 검색
    const user = await User.findByUsername(username);
    if (!user) return res.status(404).json({ message: '해당 아이디에 해당하는 유저가 없습니다.' });

    // 이메일이 일치하는지 확인
    if (user.email !== email) {
      return res.status(400).json({ message: '이메일이 일치하지 않습니다.' });
    }

    // 임시 비밀번호 생성
    const temporaryPassword = Math.random().toString(36).slice(-8); // 임시 비밀번호 예: "abcd1234"
    await User.updatePassword(user.id, temporaryPassword);

    // 임시 비밀번호를 이메일로 보내기
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // 발신 이메일 (환경 변수에서 관리)
        pass: process.env.EMAIL_PASSWORD, // 발신 이메일 비밀번호 (환경 변수에서 관리)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: '임시 비밀번호',
      text: `귀하의 임시 비밀번호는 ${temporaryPassword}입니다. 로그인 후 반드시 비밀번호를 변경하세요.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: '임시 비밀번호가 이메일로 전송되었습니다.' });
  } catch (err) {
    res.status(500).json({ message: '비밀번호 찾기 실패', error: err.message });
  }
};

