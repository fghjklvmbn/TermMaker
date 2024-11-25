const db = require('../config/db');

// 결제 수단 추가
const addPaymentMethod = async (req, res) => {
  const { card_name, card_number, cvc, expiry_date, billing_address, payment_password } = req.body;

  try {
    await db.execute(
      'INSERT INTO payment (user_id, card_name, card_number, cvc, expiry_date, billing_address, payment_password) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [req.user.id, card_name, card_number, cvc, expiry_date, billing_address, payment_password]
    );

    res.status(201).json({ message: 'Payment method added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add payment method' });
  }
};

// 사용자 결제 수단 조회
const getPaymentMethods = async (req, res) => {
  try {
    const [paymentRows] = await db.execute('SELECT * FROM payment WHERE user_id = ?', [req.user.id]);

    res.status(200).json(paymentRows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch payment methods' });
  }
};

module.exports = { addPaymentMethod, getPaymentMethods };
