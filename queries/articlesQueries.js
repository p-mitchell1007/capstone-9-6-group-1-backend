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

const createArticle = async (title, author, creation_date, article_preview) => {
  try {
    const newArticle = await db.one('INSERT INTO articles (title, author, creation_date, article_preview) VALUES ($1, $2, $3, $4) RETURNING *', [title, author, creation_date, article_preview]);
    return newArticle;
  } catch (error) {
    throw error;
  }
};

const updateArticle = async (articleId, title, author, creation_date, article_preview) => {
  try {
    const updatedArticle = await db.one('UPDATE articles SET title = $2, author = $3, creation_date = $4, article_preview = $5 WHERE id = $1 RETURNING *', [articleId, title, author, creation_date, article_preview]);
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
