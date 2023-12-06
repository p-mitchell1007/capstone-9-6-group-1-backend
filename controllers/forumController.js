const express = require('express');
const router = express.Router();

const {
  getForumPostsByUsers,
  getForumPostsByUser,
  // getUserById,
  // createUser,
} = require('../queries/forumQueries'); 
router.get('/', async (req, res) => {
  const  forumPosts = await getForumPostsByUsers();

  if (!Array.isArray(forumPosts)) {
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  } else {
    return res.json(forumPosts);
  }
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await getForumPostsByUser(userId);

  if (user instanceof Error) {
    return res.status(404).json({ error: 'User not found' });
  } else {
    return res.json(user);
  }
});

// router.post('/', async (req, res) => {
//   const { fname, lname, email, phone, city, homestate, password_hash, profile_img } = req.body;
//   const newUser = await createUser(fname, lname, email, phone, city, homestate, password_hash, profile_img);

//   if (newUser instanceof Error) {
//     return res.status(500).json({ error: 'Error creating user' });
//   } else {
//     return res.status(201).json(newUser);
//   }
// });

module.exports = router;

