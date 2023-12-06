const db = require('../db/dbConfig.js'); 

const getUserProfiles = async () => {
  try {
    const userProfiles = await db.any( 'SELECT users.id, fname, lname, email, phone, city, homestate, profiles.country, created_at, profiles.dob, profiles.gender, profiles.have_children, profiles.age_of_children, profiles.favorite_magazines, profiles.favorite_websites, profiles.favorite_songs, profiles.favorite_movies, profiles.favorite_activity FROM users JOIN profiles ON users.id = profiles.user_id');
    return userProfiles;
  } catch (error) {
    throw error;
  }
};

// Single Profile
const getUserProfile = async (pw) => {
  try {
    const userProfile = await db.any( 'SELECT users.id, fname, lname, email, phone, city, homestate, profiles.country, created_at, profiles.dob, profiles.gender, profiles.have_children, profiles.age_of_children, profiles.favorite_magazines, profiles.favorite_websites, profiles.favorite_songs, profiles.favorite_movies, profiles.favorite_activity FROM users JOIN profiles ON users.id = profiles.user_id');
    return userProfile;
  } catch (error) {
    throw error;
  }
};

module.exports = {
getUserProfiles,
getUserProfile
};