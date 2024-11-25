module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key', // 환경 변수 또는 기본값
    jwtExpiresIn: '1h', // 토큰 유효 기간
  };
  