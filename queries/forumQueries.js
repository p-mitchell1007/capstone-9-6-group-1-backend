const db = require('../db/dbConfig.js'); 

const getForumPostsByUsers = async () => {
  try {
    const forumPostByUsers = await db.any( 
      'SELECT users.id, fname, lname, email, phone, password_hash, created_at, posts.user_id, posts.post_made, posts.title, posts.content, comments.post_id, comments.comment_made, comments.content FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON comments.post_id = posts.id'
    );
    // const forumPostByUsers = await db.any( 
    //   'SELECT users.id, fname, lname, email, phone, password_hash, created_at, posts.user_id, posts.post_made, posts.title, posts.content, comments.post_id, comments.comment_made, comments.content FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON comments.post_id = posts.id WHERE users.id = $1', 5 
    // );
    return forumPostByUsers;
  } catch (error) {
    throw error;
  }
};

const getForumPostsByUser = async (userId = 1) => {
  try {
    const forumPostByUser = await db.any(
      'SELECT users.id, fname, lname, email, phone, password_hash, profile_img, posts.id, posts.user_id, posts.title, posts.content, comments.id, comments.content FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON comments.post_id = posts.id WHERE users.id = $1', userId
    );
    // const forumPosts = await db.any(
    //   'SELECT id, user_id, post_made, title, content FROM posts WHERE user_id = $1', userId
    // );
    return forumPostByUser;
  } catch (error) {
    throw error;
  }
};

/* * * * 
const getCurrentUser = async (userId = 5) => {
  try {
    const currentUser = await db.one(
      // 'SELECT users.id, fname, lname, email, phone, password_hash, profile_img FROM users WHERE users.id = $1', userId
      'SELECT * FROM users WHERE users.id = $1', userId
    );
   
    return currentUser;
  } catch (error) {
    throw error;
  }
};
const getUserPosts = async (userId = 5) => {
  try {
    const forumPostByUser = await db.any(
      'SELECT * FROM posts WHERE posts.user_id = $1', userId
      // 'SELECT posts.id, posts.user_id, posts.title, posts.content FROM posts WHERE posts.user_id = $1', userId
    );
   
    return forumPostByUser;
  } catch (error) {
    throw error;
  }
};

const getPostComments = async (postId) => {
  try {
    const postComments = await db.any(
      'SELECT id, post_id, comment_made, content FROM comments WHERE comments.post_id = $1', postId
    );
    return postComments;
  } catch (error) {
    throw error;
  }
};
// const createPost= async (id, user_id, post_made, title, content) => {
//   try {
//     const newUser = await db.one('INSERT INTO posts (id, user_id, post_made, title, content) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [fname, lname, email, phone, city, homestate, password_hash, profile_img]);
//     return newUser;
//   } catch (error) {
//     throw error;
//   }
// };

// const updatePost= async (id, user_id, post_made, title, content => {
//   try {
//     const updatedUser = await db.one('UPDATE posts SET fname = $2, lname = $3, email = $4, phone = $5, city = $6, homestate = $7, password_hash = $8, profile_img = $9 WHERE id = $1 RETURNING *', [userId, fname, lname, email, phone, city, homestate, password_hash, profile_img]);
//     return updatedUser;
//   } catch (error) {
//     throw error;
//   }
// };

// const deleteUser = async (userId) => {
//   try {
//     await db.none('DELETE FROM users WHERE id = $1', userId);
//   } catch (error) {
//     throw error;
//   }
// };
*/
module.exports = {
  getForumPostsByUsers,
  getForumPostsByUser,
  // getCurrentUser,
  // getUserPosts,
  // getPostComments
};
