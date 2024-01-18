const express = require('express');
const router = express.Router();

const {
    getAllComments,
    getCommentsByPostId,
    createComment,
} = require('../queries/commentsQueries');

/* displays the comments for specific post. */
router.get('/:post_id', async (req, res) => {
    const post_id = req.params.post_id;
    console.log("running get request");
    console.log(post_id);
    try {
        const comments = await getCommentsByPostId(post_id);

        if (!Array.isArray(comments)) {
            return res.status(500).json({ error: 'Server Error. Please Try Again.' });
        } else {
            return res.json(comments);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ Error: 'Server Error. Please Try Again.' });
    }
});

router.post('/:post_id', async (req, res) => {
    const post_id = req.params.post_id;
    const { user_id, comment_made, content } = req.body;

    if (!user_id || !comment_made || !content) {
        return res.status(400).json({ Error: 'Missing required fields.' });
    }

    try { 
        const newComment = await createComment(user_id, post_id, content, comment_made);

        if (newComment) {
            return res.status(201).json(newComment);
        } else {
            return res.status(500).json({ Error: 'Failed to add a new comment.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ Error: 'Server Error. Please Try Again.' });
    }
});

module.exports = router;
