const express = require("express");
const router = express.Router();

const {
    getAllPosts,
    getPostByPostId,
    createPost,
    deletePost,
    // updatePost
} = require("../queries/postsQueries");

/* --- GET ALL POSTS --- */
router.get("/", async (req, res) => {
    const getPosts = await getAllPosts();
    
    if (!Array.isArray(getPosts)) {
        return res.status(500).json({ Error: "Server Error. Please Try Again."})
    } else {
        return res.json(getPosts);
    }
})

/* --- GET A SINGLE POSTS --- */
router.get("/:id", async (req, res) => {
    const postId = req.params.id;
    const postById = await getPostByPostId(postId)
    res.json(postById)
})

/* --- CREATE A NEW POSTS --- */
router.post("/", async (req, res) => {
    const {userId, postMade, title, content } = req.body
    const newPost = await createPost(userId, postMade, title, content)
    res.json(newPost)
})

/* --- UPDATE A POST --- */
// router.put("/:id", async (req, res) => {
//     const postId = req.params.id;
//     const postById = await updatePost(postId)
//     res.json(postById)
// })

/* --- DELETE A POST --- */
router.delete("/:id", async (req, res) => {
    const postId = req.params.id;
    const deletedPost = await deletePost(postId)
    res.json(deletedPost)
    // if(alert('Confirm Delete?')){

    // } else {
    //     alert('Action Cancelled!')
    // }
})

module.exports = router;



