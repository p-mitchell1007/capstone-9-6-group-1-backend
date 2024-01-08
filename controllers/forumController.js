const express = require('express');
const router = express.Router();
const db = require('../db/dbConfig.js'); 


const {
  getAllForumPosts,
  getForumPostsByUsers,
  getForumPostsByUser,
  getCurrentUser,
  getUserPosts,
  getPostComments
  
} = require('../queries/forumQueries'); 

// router.get('/', async (req, res) => {
//   console.log('entered root route')
//   const  AllForumPosts = await getAllForumPosts();

//   if (!Array.isArray(AllForumPosts)) {
//     return res.status(500).json({ error: 'Server Error. Please Try Again.' });
//   } else {
//     console.log('getAllForumPosts Successful!!')
//     console.log('AllForumPosts Results:--->')

//     return res.json(AllForumPosts);
//   }
// });
router.get('/', async (req, res) => {
  
  try {
    const { userId } = req.params;

    console.log('.get trying user id: -->', userId)

    const allUsersQuery = `SELECT * FROM users`;
    const allPostsQuery = `SELECT * FROM posts`;
    const allCommentsQuery = `SELECT * FROM comments`;

    const allUsers = await db.query(allUsersQuery, [userId]);
    const allPosts = await db.query(allPostsQuery, [userId]);
    const allComments = await db.query(allCommentsQuery);
    console.log('users', allUsers,': allPosts',allPosts)
    console.log('allComments', allComments)

    // res.render('user', { user, posts, comments });
    return res.json({ allUsers, allPosts, allComments });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});


router.get('/:userId', async (req, res) => {
  console.log('Entered router.get!!!')
  try {
    const { userId } = req.params;

    console.log('.get trying user id: -->', userId)

    const userQuery = `SELECT * FROM users WHERE id = $1`;
    const postsQuery = `SELECT * FROM posts WHERE user_id = $1`
    const commentsQuery = `SELECT * FROM comments WHERE post_id = ANY($1::int[])`;

    const user = await db.query(userQuery, [userId]);
    const posts = await db.query(postsQuery, [userId]);
    const comments = await db.query(commentsQuery, [posts.map(post => post.id)]);
    console.log('user', user,': posts',posts)
    console.log('comments', comments)

    // res.render('user', { user, posts, comments });
    return res.json({ user, posts, comments });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

module.exports = router;


// router.get('/:user_id', async (req, res) => {
//   const userId = req.params.user_id;
//   console.log(userId)
//   const user = await getForumPostsByUser(userId);

//   if (user instanceof Error) {
//     return res.status(404).json({ error: 'User not found' });
//   } else {
//     return res.json(user);
//   }
// });



// router.get('/:user_id', async (req, res) => {
//   const userId = req.params.user_id;
//   console.log(userId)
//   const user = await getCurrentUser(userId);

//   if (user instanceof Error) {
//     return res.status(404).json({ error: 'User not found' });
//   } else {
//     return res.json(user);
//   }
// });

// router.get('/:user_id/:post_id', async (req, res) => {
//   const userId = req.params.user_id;
//   const postId = req.params.user_id.post_id;
//   console.log('userId -->',userId, 'postId -->',postId)
//   const comments = await getForumCommentsByPost(postId);

//   if (user instanceof Error) {
//     return res.status(404).json({ error: 'User not found' });
//   } else {
//     return res.json(user);
//   }
// });


module.exports = router;

