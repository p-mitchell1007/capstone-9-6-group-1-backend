const express = require('express');
const router = express.Router();

const {
  getForumPostsByUsers,
  getForumPostsByUser,
  getCommentsByPost,
  
} = require('../queries/forumQueries'); 
router.get('/', async (req, res) => {
  const  forumPosts = await getForumPostsByUsers();

  if (!Array.isArray(forumPosts)) {
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  } else {
    return res.json(forumPosts);
  }
});

router.get('/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  console.log(userId)
  const user = await getForumPostsByUser(userId);

  if (user instanceof Error) {
    return res.status(404).json({ error: 'User not found' });
  } else {
    return res.json(user);
  }
});
router.get('/comments/:id', async (req, res) => {
  const postId = req.params.id;
  console.log("postId===>", postId)
  const comments = await getCommentsByPost(postId);

  if (comments instanceof Error) {
    return res.status(404).json({ error: 'User not found' });
  } else {
    return res.json(comments);
  }
});


module.exports = router;

