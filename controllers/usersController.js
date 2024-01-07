// userController.js

const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
} = require('../queries/userQueries'); 

router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (error) {
    console.error('Error fetching all users:', error);
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  }
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUserById(userId);
    return res.json(user);
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  }
});

router.post('/create', async (req, res) => {
  const { firstName, lastName, email, phone, city, homestate, profile_img } = req.body;

  try {
    const createdUser = await createUser(firstName, lastName, email, phone, city, homestate, profile_img);

    if (createdUser.error) {
      return res.status(400).json({ error: createdUser.error });
    } else {
      return res.status(201).json(createdUser);
    }
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  }
});

module.exports = router;

