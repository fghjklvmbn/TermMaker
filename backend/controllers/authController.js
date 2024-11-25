const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../config/db');

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const [result] = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
    res.status(201).send({ message: 'User created successfully', userId: result.insertId });
  } catch (error) {
    res.status(500).send({ message: 'Error creating user', error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(404).send({ message: 'User not found' });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).send({ message: 'Invalid credentials' });

    // JWT 생성
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: '1h' } // 1시간 동안 유효
    );

    res.send({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).send({ message: 'Error during login', error });
  }
};

module.exports = { signup, login };