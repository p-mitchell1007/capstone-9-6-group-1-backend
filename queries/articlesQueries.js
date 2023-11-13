const db = require('../db/dbConfig.js');

const getAllArticles = async () => {
  try {
    const articles = await db.any('SELECT * FROM articles');
    return articles;
  } catch (error) {
    throw error;
  }
};

const getArticleById = async (articleId) => {
  try {
    const article = await db.one('SELECT * FROM articles WHERE id = $1', articleId);
    return article;
  } catch (error) {
    throw error;
  }
};

const createArticle = async (title, author, article_preview, creation_date) => {
  try {
    const newArticle = await db.one('INSERT INTO articles (title, author, article_preview, creation_date) VALUES ($1, $2, $3, $4) RETURNING *', [title, author, article_preview, creation_date]);
    return newArticle;
  } catch (error) {
    throw error;
  }
};

const updateArticle = async (articleId, title, author, article_preview, creation_date) => {
  try {
    const updatedArticle = await db.one('UPDATE articles SET title = $2, author = $3, article_preview = $4, creation_date = $5 WHERE id = $1 RETURNING *', [articleId, title, author, article_preview, creation_date]);
    return updatedArticle;
  } catch (error) {
    throw error;
  }
};

const deleteArticle = async (articleId) => {
  try {
    await db.none('DELETE FROM articles WHERE id = $1', articleId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
