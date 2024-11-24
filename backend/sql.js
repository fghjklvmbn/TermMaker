const { Sequelize } = require('sequelize');

// MySQL 연결 설정
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // PostgreSQL의 경우 'postgres'
});

// 연결 테스트
sequelize.authenticate()
  .then(() => console.log('MySQL 연결 성공'))
  .catch((err) => console.error('MySQL 연결 실패:', err));
