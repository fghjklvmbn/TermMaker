const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 휠체어 등록
router.post('/register', async (req, res) => {
  const { description, location } = req.body; // location은 POINT 데이터로 위도/경도 전달
  try {
    const [result] = await db.execute(
      `INSERT INTO wheelchair (description, location) 
       VALUES (?, POINT(?, ?))`,
      [description, location.lat, location.lng]
    );
    res.status(201).json({ message: 'Wheelchair registered', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register wheelchair' });
  }
});

// 사용 가능한 휠체어 조회
router.get('/available', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM wheelchair WHERE is_in_use = 0');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch available wheelchairs' });
  }
});

module.exports = router;
