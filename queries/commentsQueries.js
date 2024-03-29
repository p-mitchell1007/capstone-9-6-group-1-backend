const db = require('../db/dbConfig.js'); 

const getAllComments = async () => {
  try {
    const comments = await db.any('SELECT * FROM comments');
    return comments;
  } catch (error) {
    throw error;
  }
};

const getCommentsByPostId = async (postId) => {
  try {
    const comments = await db.any('SELECT * FROM comments WHERE post_id = $1', postId);
    return comments;
  } catch (error) {
    throw error;
  }
};

const getCommentById = async (commentId) => {
  try {
    const comment = await db.one('SELECT * FROM comments WHERE id = 1', commentId);
    return comment;
  } catch (error) {
    throw error;
  }
};

const createComment = async (userId, postId, content, commentMade) => {
  try {
    const newComment = await db.one('INSERT INTO comments (user_id, post_id, content, comment_made) VALUES ($1, $2, $3, $4) RETURNING *', [userId, postId, content, commentMade]);
    return newComment;
  } catch (error) {
    throw error;
  }
};

const updateComment = async (commentId, text) => {
  try {
    const updatedComment = await db.one('UPDATE comments SET content = $1 WHERE id = $2 RETURNING *', [text, commentId]);
    return updatedComment;
  } catch (error) {
    throw error;
  }
};

const deleteComment = async (commentId) => {
  try {
    await db.none('DELETE FROM comments WHERE id = $1', commentId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllComments,
  getCommentsByPostId,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
