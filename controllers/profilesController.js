const express = require('express');
const app = express.Router();

const {
  getUserProfiles,
  getUserProfile,
  createUserProfile
} = require('../queries/profilesQueries'); 

app.get('/', async (req, res) => {

  const  userProfiles = await getUserProfiles();
 
  if (!Array.isArray(userProfiles)) {
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  } else {
    return res.json(userProfiles);
  }
});

app.get('/:id', async (req, res) => {
  const userId = req.params.id

  const  userProfile = await getUserProfile(userId);
  console.log(userId, userProfile)
  
  if (userProfile !== null) {
    return res.json(userProfile);
  } else {
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  }
});

app.post('/', async (req, res) => {
  const newProfile = req.params;
  const newUserProfile = createUserProfile(newProfile)
});


module.exports = app;