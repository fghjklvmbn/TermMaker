const express = require('express');
const { addWheelchair, deleteWheelchair } = require('../controllers/adminController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// 관리자 권한 확인
router.post('/wheelchairs', authenticateToken, authorizeAdmin, addWheelchair);
router.delete('/wheelchairs/:id', authenticateToken, authorizeAdmin, deleteWheelchair);

module.exports = router;