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

module.exports = router;