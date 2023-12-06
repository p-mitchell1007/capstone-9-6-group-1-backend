//app.js

const express = require("express");
require("dotenv").config()
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const router = express.Router();

// /* - - - CONTROLLERS - - - */
const postsController = require('./controllers/postsController');
const commentsController = require('./controllers/commentsController');
const articlesController = require('./controllers/articlesController');
const createProfileController = require('./controllers/createProfileController.js');

// Use router.use instead of app.use
router.use('/create-profile', createProfileController);

// /* - - - ROUTES - - - */
router.use('/posts', postsController);
router.use('/comments', commentsController);
router.use('/articles', articlesController);

// Define a route for the root path
router.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

router.post('/create-user-profile', async (req, res) => {
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

module.exports = { app, router };






