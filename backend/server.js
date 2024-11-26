const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const protectedRoutes = require('./routes/protectedRoutes');
const userRoutes = require('./routes/userRoutes');
const communityRoutes = require('./routes/communityRoutes');
const paymentRoutes = require('./routes/paymantRoutes');
const wheelchairRoutes = require('./routes/wheelchairRoutes');
const commentRoutes = require('./routes/commentRoutes');


dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 작동되고 있습니다. 주소 : http://localhost:${PORT}`);
});


// 각 기능 라우터 등록
app.use('/api/payment', paymentRoutes); // 결제수단 관련 요청
app.use('/api/community', communityRoutes); // 커뮤니티 관련 요청
app.use('/api/comment', commentRoutes); // 댓글 관련 요청
app.use('/api/wheelchair', wheelchairRoutes); // 휠체어 관련 요청
app.use('/api/user', userRoutes)  // 로그인/회원가입 등


// 인증요청 라우터 등록
app.use('/api/protected', protectedRoutes); // 인증된 요청
