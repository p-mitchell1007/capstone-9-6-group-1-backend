const db = require('../db/dbConfig.js'); 

const getForumPostsByUsers = async () => {
  try {
    const forumPosts = await db.any( 
      'SELECT users.id, fname, lname, email, phone, city, password_hash, created_at, posts.user_id, posts.post_made, posts.title, posts.content, comments.user_id, comments.comment_made, comments.content FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id'
    );
    return forumPosts;
  } catch (error) {
    throw error;
  }
};

const getForumPostsByUser = async (userId) => {
  try {
    const forumPosts = await db.any(
      'SELECT id, user_id, post_made, title, content FROM posts WHERE user_id = $1', userId
    );
    return forumPosts;
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

module.exports = {
  getForumPostsByUsers,
  getForumPostsByUser,
  
};
