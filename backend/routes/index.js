const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const paymentController = require('../controllers/paymentController');
const communityController = require('../controllers/communityController');
const feedbackController = require('../controllers/feedbackController');

const router = express.Router();

// 사용자 관련
router.post('/register', userController.registerUser);
router.get('/profile', authenticateToken, userController.getUserProfile);

// 결제 관련
router.post('/payment', authenticateToken, paymentController.addPaymentMethod);
router.get('/payment', authenticateToken, paymentController.getPaymentMethods);

// 커뮤니티 관련
router.post('/community', authenticateToken, communityController.createPost);
router.get('/community', communityController.getPosts);

// 피드백 관련
router.post('/feedback', authenticateToken, feedbackController.addFeedback);
router.get('/feedback', feedbackController.getFeedbacks);

module.exports = router;
