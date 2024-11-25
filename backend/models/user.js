const pool = require('../config/db');

class User {
  static async create({ username, password, name, nickname, phoneNumber }) {
    const [result] = await pool.query(
      'INSERT INTO user (username, password, name, nickname, phone_number) VALUES (?, ?, ?, ?, ?)',
      [username, password, name, nickname, phoneNumber]
    );
    return result;
  }

  static async findByUsername(username) {
    const [rows] = await pool.query('SELECT * FROM user WHERE username = ?', [username]);
    return rows[0];
  }
}

module.exports = User;