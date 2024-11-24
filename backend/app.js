const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));


// 기본 라우트
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// app.get('/test', (req, res) => {
//     res.send('test');
// });

// // 전역 이동
// app.use((req, res, next) => {
//     console.log("${req.method} ${req.url}");
//     next();
// });

// // 서버 시작
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });