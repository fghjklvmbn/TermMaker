const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// DB 연결 테스트
const testDBConnection = async () => {
    try {
      const [rows] = await pool.query('SELECT 1 + 1 AS solution');
      console.log('Database connected successfully:', rows[0].solution); // 출력: 2
    } catch (error) {
      console.error('Database connection failed:', error);
    }
};

// 서버 시작 시 연결 테스트 실행
testDBConnection();