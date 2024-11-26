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

  static async updateRefreshToken(userId, refreshToken) {
    await pool.query('UPDATE user SET refresh_token = ? WHERE id = ?', [refreshToken, userId]);
  }

  static async findById(userId) {
    const [rows] = await pool.query('SELECT * FROM user WHERE id = ?', [userId]);
    return rows[0];
  }
}

// 이메일로 유저 찾기
User.findByEmail = async function (email) {
  return await this.findOne({ where: { email } });
};

// 사용자 이름으로 유저 찾기
User.findByUsername = async function (username) {
  return await this.findOne({ where: { username } });
};

// 비밀번호 변경
User.updatePassword = async function (userId, newPassword) {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  return await this.update({ password: hashedPassword }, { where: { id: userId } });
};


module.exports = User;
