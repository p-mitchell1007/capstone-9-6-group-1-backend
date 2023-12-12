
const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  // createUser,
} = require('../queries/userQueries'); 

router.get('/', async (req, res) => {

  const users = await getAllUsers();

  if (!Array.isArray(users)) {
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  } else {
    return res.json(users);
  }
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id
  const user = await getUserById(userId);

  if (!Array.isArray(user)) {
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  } else {
    return res.json(user);
  }
});

module.exports = router;
