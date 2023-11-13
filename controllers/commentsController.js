const express = require('express');
const router = express.Router();

const {
    getAllComments,
    addComment,
} = require('../queries/commentsQueries');

/* I'm able to load the comments table and data on to the browser but I have to add an
id after comment (ex: localhost://3345/comments/1). The id is suppost to be a post id 
according to the info below but I am able to see the comments for all posts. */
router.get('/:post_id', async (req, res) => {
    const post_id = req.params.post_id;

    try {
        const comments = await getAllComments(post_id);

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
        const newComment = await addComment(post_id, user_id, comment_made, content);

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
