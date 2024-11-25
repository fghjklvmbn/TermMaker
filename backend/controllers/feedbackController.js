const db = require('../config/db');

// 피드백 작성
const addFeedback = async (req, res) => {
  const { rating, content } = req.body;

  try {
    await db.execute('INSERT INTO feedback (user_id, rating, content) VALUES (?, ?, ?)', [
      req.user.id,
      rating,
      content,
    ]);

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};

// 피드백 조회
const getFeedbacks = async (req, res) => {
  try {
    const [feedbacks] = await db.execute('SELECT * FROM feedback');
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch feedbacks' });
  }
};

module.exports = { addFeedback, getFeedbacks };
