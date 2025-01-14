const pool = require('../config/db');

class User {
  static async create({ username, password, name, email, birthday, nickname, phoneNumber }) {
    const [result] = await pool.query(
      'INSERT INTO user (username, password, name, email, birthday, nick, phonenum) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [username, password, name, email, birthday, nickname, phoneNumber]
    );
    return result;
  }

  static async findByUsername(username) {
    const [rows] = await pool.query('SELECT * FROM user WHERE username = ?', [username]);
    return rows[0];
  }

  static async findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
    return rows[0];
  }

  static async findById(userId) {
    const [rows] = await pool.query('SELECT * FROM user WHERE id = ?', [userId]);
    return rows[0];
  }

  static async updateRefreshToken(userId, refreshToken) {
    await pool.query('UPDATE user SET refresh_token = ? WHERE id = ?', [refreshToken, userId]);
  }

  static async updatePassword(userId, newPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE user SET password = ? WHERE id = ?', [hashedPassword, userId]);
  }
}

module.exports = User;
