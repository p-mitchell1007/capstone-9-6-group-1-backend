const express = require('express');
const router = express.Router();

const {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../queries/articlesQueries'); 

router.get('/', async (req, res) => {
  const articles = await getAllArticles();

  if (!Array.isArray(articles)) {
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  } else {
    return res.json(articles);
  }
});

router.get('/:id', async (req, res) => {
  const articleId = req.params.id;
  const article = await getArticleById(articleId);

  if (article instanceof Error) {
    return res.status(404).json({ error: 'Article not found' });
  } else {
    return res.json(article);
  }
});

router.post('/', async (req, res) => {
  const { title, author, creation_date, article_preview} = req.body;
  const newArticle = await createArticle(title, author, creation_date, article_preview);

  if (newArticle instanceof Error) {
    return res.status(500).json({ error: 'Error creating article' });
  } else {
    return res.status(201).json(newArticle);
  }
});

router.put('/:id', async (req, res) => {
  const articleId = req.params.id;
  const { title, author, creation_date, article_preview } = req.body;
  const updatedArticle = await updateArticle(articleId, title, author, creation_date, article_preview);

  if (updatedArticle instanceof Error) {
    return res.status(500).json({ error: 'Error updating article' });
  } else {
    return res.json(updatedArticle);
  }
});

router.delete('/:id', async (req, res) => {
  const articleId = req.params.id;
  try {
    await deleteArticle(articleId);
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting article' });
  }
});

module.exports = router;
