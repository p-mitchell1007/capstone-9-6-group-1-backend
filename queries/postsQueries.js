const db = require("../db/dbConfig.js");

/* --- QUERY TO GET ALL POST --- */
const getAllPosts = async () => {
  try {
    const allPosts = await db.any("SELECT * FROM posts");
    return allPosts;
  } catch (e) {
    return e;
  }
};

/* --- QUERY TO GET A SINGLE POST BY ID --- */
const getPostByPostId = async (postId) => {
  try {
    const post = await db.one(`
    SELECT * FROM posts WHERE id = $1`, postId);
    return post;
  } catch (error) {
    return error;
  }
};

/* --- QUERY TO UPDATE A POST --- */
 const updatePost = async (id, userId, postMade, title, content) => {
  try {
    const updatedPost = await db.one(`UPDATE posts 
      SET user_id = $2, post_made = $3, title = $4, 
       content = $5) WHERE id = $1 RETURNING * `,
      [userId, postMade, title, content]);
           return updatedPost;
  } catch (error) {
    return error;
  }
 };

/* --- QUERY TO CREATE A NEW POSTS --- */
const createPost = async (userId, postMade, title, content) => {
  try {
    const newPost = await db.one(`
      INSERT INTO posts (user_id, post_made, title, content)
      VALUES ($1, $2, $3, $4) RETURNING *
    `,
      [userId, postMade, title, content]);
    return newPost;
  } catch (e) {
    return e;
  }
};

const deletePost = async (postId) => {
  try {
    const post = await db.one(`
    DELETE FROM posts WHERE id = $1 RETURNING *`, postId);
    return post;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPosts,
  getPostByPostId,
  createPost,
  deletePost,
  updatePost
};


// //postsQueries.js

// const db = require("../db/dbConfig.js");

// const getAllPosts = async () => {
//   try {
//     const allPosts = await db.any("SELECT * FROM posts");
//     return allPosts;
//   } catch (e) {
//     return e;
//   }
// };

// module.exports = {
//   getAllPosts,
// };