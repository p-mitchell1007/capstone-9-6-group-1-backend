
const express = require("express");
require("dotenv").config()
const app = express();
const cors = require("cors");

app.use(cors())


// /* - - - CONTROLLERS - - - */
const postsController = require("./controllers/postsController");
const commentsController = require("./controllers/commentsController");
const userController = require("./controllers/usersController"); // 
const articlesController = require("./controllers/articlesController");
const forumController = require("./controllers/forumController");
const profilesController = require("./controllers/profilesController");

app.use(cors());
app.use(express.json());

// /* - - - ROUTES - - - */
app.use("/comments", commentsController);
app.use("/users", userController);
app.use("/articles", articlesController);
app.use("/forum", forumController);
app.use("/profiles", profilesController);
app.use("/posts", postsController);


app.get("/", (req, res) => {
  return res.send("Welcome To Reflections");
});

app.get("*", (req, res) => {
  return res.status(404).json({
    Error: "GET request unsuccessful.",
    message: "Page Not Found! Please try again.",
  });
});

module.exports = { app };








