const express = require('express');
const app = express.Router();

const {
  getUserProfiles,
  // getUserById,
  // createUser,
} = require('../queries/profilesQueries'); 

app.get('/', async (req, res) => {


  const  userProfiles = await getUserProfiles();

  if (!Array.isArray(userProfiles)) {
    return res.status(500).json({ error: 'Server Error. Please Try Again.' });
  } else {
    return res.json(userProfiles);
  }
});



module.exports = app;