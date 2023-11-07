const db = require('../db/dbConfig.js'); 

const getAllComments = async () => {
  try {
    const comments = await db.any('SELECT * FROM comments');
    return comments;
  } catch (error) {
    throw error;
  }
};

const getCommentById = async (commentId) => {
  try {
    const comment = await db.one('SELECT * FROM comments WHERE id = $1', commentId);
    return comment;
  } catch (error) {
    throw error;
  }
};

const createComment = async (text, postId) => {
  try {
    const newComment = await db.one('INSERT INTO comments (text, post_id) VALUES ($1, $2) RETURNING *', [text, postId]);
    return newComment;
  } catch (error) {
    throw error;
  }
};

const updateComment = async (commentId, text) => {
  try {
    const updatedComment = await db.one('UPDATE comments SET text = $1 WHERE id = $2 RETURNING *', [text, commentId]);
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
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
