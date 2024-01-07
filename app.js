const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Controllers
const postsController = require("./controllers/postsController");
const commentsController = require("./controllers/commentsController");
const userController = require("./controllers/usersController"); // 
const articlesController = require("./controllers/articlesController");
const forumController = require("./controllers/forumController");
const profilesController = require("./controllers/profilesController");

// Routes
app.use("/comments", commentsController);
app.use("/users", usersController);
app.use("/articles", articlesController);
app.use("/forum", forumController);
app.use("/profiles", profilesController);
app.use("/posts", postsController);

// Default route
app.get("/", (req, res) => {
  return res.send("Welcome To Reflections");
});

// 404 route
app.get("*", (req, res) => {
  return res.status(404).json({
    error: "GET request unsuccessful.",
    message: "Page Not Found! Please try again.",
  });
});

module.exports = { app };









