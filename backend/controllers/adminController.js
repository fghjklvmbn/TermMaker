const pool = require('../config/db'); // 데이터베이스 연결

const addWheelchair = async (req, res) => {
  const { model, location } = req.body;

  try {
    const [result] = await pool.query('INSERT INTO wheelchairs (model, location) VALUES (?, ?)', [model, location]);
    res.status(201).send({ message: 'Wheelchair added successfully', id: result.insertId });
  } catch (error) {
    res.status(500).send({ message: 'Error adding wheelchair', error });
  }
};

const deleteWheelchair = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM wheelchairs WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).send({ message: 'Wheelchair not found' });

    res.send({ message: 'Wheelchair deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting wheelchair', error });
  }
};

module.exports = { addWheelchair, deleteWheelchair };