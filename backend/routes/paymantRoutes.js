const express = require('express');
const router = express.Router();
const db = require('../config/db'); // DB 연결 설정

// 결제 수단 추가
router.post('/add', async (req, res) => {
  const { user_id, card_name, card_number, cvc, expiry_date, billing_address, payment_password } = req.body;
  try {
    const [result] = await db.execute(
      `INSERT INTO payment (user_id, card_name, card_number, cvc, expiry_date, billing_address, payment_password) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [user_id, card_name, card_number, cvc, expiry_date, billing_address, payment_password]
    );
    res.status(201).json({ message: 'Payment method added', id: result.insertId });
  } catch (error) {
    console.error('Error adding payment method:', error.message);
    res.status(500).json({ error: 'Failed to add payment method' });
  }
});

// 사용자별 결제 수단 조회
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const [rows] = await db.execute('SELECT * FROM payment WHERE user_id = ?', [userId]);
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching payment methods:', error.message);
    res.status(500).json({ error: 'Failed to fetch payment methods' });
  }
});

module.exports = router;
