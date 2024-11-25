const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send({ message: 'Access token required' });

  jwt.verify(token.split(' ')[1], process.env.SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send({ message: 'Invalid or expired token' });
    req.user = user; // 토큰의 payload를 저장
    next();
  });
};

const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).send({ message: 'Admin access required' });
  next();
};

module.exports = { authenticateToken, authorizeAdmin };