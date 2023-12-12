

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

/* - - - CONTROLLERS - - - */

const postsController = require("./controllers/postsController");
const commentsController = require("./controllers/commentsController");
const userController = require("./controllers/usersController"); // 
const articlesController = require("./controllers/articlesController");
const forumController = require("./controllers/forumController");
const profilesController = require("./controllers/profilesController");

// // Use router.use instead of app.use
// app.use('/create-profile', createProfileController);

/* - - - ROUTES - - - */

app.use("/posts", postsController);
app.use("/comments", commentsController);
app.use("/users", userController);
app.use("/articles", articlesController);
app.use("/profiles", profilesController);

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

app.post('/create-user-profile', async (req, res) => {
  try {
    const { fname, lname, email, phone, city, homestate, profile_img, name, age, reasonForJoining } = req.body;
    const newUser = await createUser(fname, lname, email, phone, city, homestate, profile_img);
    const newUserProfile = await createUserProfile(name, age, reasonForJoining);

    res.status(201).json({
      message: 'User and profile created successfully',
      user: newUser,
      userProfile: newUserProfile,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = { app };






