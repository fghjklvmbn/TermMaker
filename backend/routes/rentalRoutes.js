const express = require('express');
const { reserveWheelchair, returnWheelchair } = require('../controllers/rentalController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

// JWT 인증 미들웨어 추가
router.post('/reserve', authenticateToken, reserveWheelchair);
router.post('/return', authenticateToken, returnWheelchair);

module.exports = router;