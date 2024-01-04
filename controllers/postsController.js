//postController.js

const express = require("express");
const router = express.Router();

const {
    getAllPosts,
} = require("../queries/postsQueries");

router.get("/", async (req, res) => {
    const getPosts = await getAllPosts();

    if (!Array.isArray(getPosts)) {
        return res.status(500).json({ Error: "Server Error. Please Try Again."})
    } else {
        return res.json(getPosts);
    }
})

// router.get('/:post_id', async (req, res) => {
//     const post_id = req.params.post_id;
//     console.log("running get request");
//     console.log(post_id);
//     try {
//         const comments = await getCommentsByPostId(post_id);

//         if (!Array.isArray(comments)) {
//             return res.status(500).json({ error: 'Server Error. Please Try Again.' });
//         } else {
//             return res.json(comments);
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ Error: 'Server Error. Please Try Again.' });
//     }
// });

module.exports = router;