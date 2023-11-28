// const express = require('express');
// require('dotenv').config();
// const cors = require('cors');
// const morgan = require('morgan');

// const app = express();

// /* - - - MIDDLEWARE - - - */
// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'));

// /* - - - CONTROLLERS - - - */
// const postsController = require('./controllers/postsController');
// const commentsController = require('./controllers/commentsController');
// const articlesController = require('./controllers/articlesController');
// const createProfileController = require('./controllers/createProfileController');

// app.use('/create-profile', createProfileController);

// /* - - - ROUTES - - - */
// app.use('/posts', postsController);
// app.use('/comments', commentsController);
// app.use('/users', userController);
// app.use('/articles', articlesController);

// /* - - - 404 - - - */
// app.get('*', (req, res) => {
//   return res.status(404).json({
//     Error: 'GET request unsuccessful.',
//     message: 'Page Not Found! Please try again.',
//   });
// });

// /* - - - ERROR HANDLING MIDDLEWARE - - - */
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     error: 'Server error.',
//     message: 'An unexpected error occurred.',
//   });
// });

// /* - - - START SERVER - - - */
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// module.exports = app;


const express = require('express');
const router = express.Router();
const { createUser, createUserProfile } = require('../path-to-your-functions'); // Update the path accordingly


// /* - - - CONTROLLERS - - - */
const postsController = require('./controllers/postsController');
const commentsController = require('./controllers/commentsController');
const articlesController = require('./controllers/articlesController');
const createProfileController = require('./controllers/createProfileController');

app.use('/create-profile', createProfileController);

// /* - - - ROUTES - - - */
app.use('/posts', postsController);
app.use('/comments', commentsController);
app.use('/articles', articlesController);
// Add a new route to create a user and user profile
router.post('/create-user-profile', async (req, res) => {
  try {
    // Extracting required data from the request body
    const { fname, lname, email, phone, city, homestate, profile_img, name, age, reasonForJoining } = req.body;
    // Creating a new user using createUser function
    const newUser = await createUser(fname, lname, email, phone, city, homestate, profile_img);
    // Creating a new user profile using createUserProfile function
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

module.exports = router;



