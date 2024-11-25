const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;
const express = require('express');
const router = express.Router();

app.get('/api/auth/verify', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    res.status(200).json({ message: 'Token is valid', user });
  });
});
