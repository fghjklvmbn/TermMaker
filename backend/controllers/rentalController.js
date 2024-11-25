const pool = require('../config/db');

const reserveWheelchair = async (req, res) => {
  const { userId, wheelchairId } = req.body;

  try {
    const [wheelchair] = await pool.query('SELECT status FROM wheelchairs WHERE id = ?', [wheelchairId]);
    if (wheelchair[0].status !== 'available') {
      return res.status(400).send({ message: 'Wheelchair is not available' });
    }

    await pool.query('INSERT INTO rentals (user_id, wheelchair_id, start_time, status) VALUES (?, ?, NOW(), ?)', [
      userId,
      wheelchairId,
      'active',
    ]);
    await pool.query('UPDATE wheelchairs SET status = ? WHERE id = ?', ['occupied', wheelchairId]);

    res.send({ message: 'Wheelchair reserved successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error reserving wheelchair', error });
  }
};

const returnWheelchair = async (req, res) => {
  const { rentalId } = req.body;

  try {
    const [rental] = await pool.query('SELECT wheelchair_id FROM rentals WHERE id = ?', [rentalId]);
    if (rental.length === 0) return res.status(404).send({ message: 'Rental not found' });

    const wheelchairId = rental[0].wheelchair_id;

    await pool.query('UPDATE rentals SET end_time = NOW(), status = ? WHERE id = ?', ['completed', rentalId]);
    await pool.query('UPDATE wheelchairs SET status = ? WHERE id = ?', ['available', wheelchairId]);

    res.send({ message: 'Wheelchair returned successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error returning wheelchair', error });
  }
};

module.exports = { reserveWheelchair, returnWheelchair };