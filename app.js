
const express = require("express");
require("dotenv").config()
const cors = require("cors");
const morgan = require("morgan");

const app = express();

/* - - - CONTROLLERS - - - */

const postsController = require("./controllers/postsController");
const commentsController = require("./controllers/commentsController");
const userController = require("./controllers/usersController"); // 
const articlesController = require("./controllers/articlesController");
const forumController = require("./controllers/forumController");
const profilesController = require("./controllers/profilesController");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* - - - ROUTES - - - */

app.use("/posts", postsController);
app.use("/comments", commentsController);
app.use("/users", userController);
app.use("/articles", articlesController);
app.use("/forum", forumController)
app.use("/profiles", profilesController)

app.get("/", (req, res) => {
  return res.send("Welcome To Reflections");
});

/* - - - 404 - - - */

app.get("*", (req, res) => {
  return res.status(404).json({
    Error: "GET request unsuccessful.",
    message: "Page Not Found! Please try again.",
  });
});

module.exports = app;


