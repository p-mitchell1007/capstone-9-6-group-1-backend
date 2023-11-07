
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* - - - CONTROLLERS - - - */

const postsController = require("./controllers/postsController");
const commentsController = require("./controllers/commentsController");
const userController = require("./controllers/usersController"); // 

/* - - - ROUTES - - - */

app.use("/posts", postsController);
app.use("/comments", commentsController);
app.use("/users", userController);

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


