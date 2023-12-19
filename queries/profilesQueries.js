const db = require('../db/dbConfig.js'); 

/* GET ALL PROFILES */
const getUserProfiles = async () => {
  try {
    const userProfiles = await db.any( 'SELECT users.id, fname, lname, email, phone, city, homestate, profiles.country, created_at, profiles.dob, profiles.gender, profiles.have_children, profiles.age_of_children, profiles.favorite_magazines, profiles.favorite_websites, profiles.favorite_songs, profiles.favorite_movies, profiles.favorite_activity FROM users JOIN profiles ON users.id = profiles.user_id');
    return userProfiles;
  } catch (error) {
    throw error;
  }
};

/* GET A SINGLE PROFILE   */

const getUserProfile = async (userId) => {
  try {
    const userProfile = await db.one( 'SELECT users.id, fname, lname, email, phone, city, homestate, profiles.user_id, profiles.country, profiles.postal_code, created_at, profiles.dob, profiles.gender, profiles.have_children, profiles.age_of_children, profiles.favorite_magazines, profiles.favorite_websites, profiles.favorite_songs, profiles.favorite_movies, profiles.favorite_activity FROM users JOIN profiles ON users.id = profiles.user_id WHERE users.id = $1',userId);
    return userProfile;
  } catch (error) {
      console.log('No user profile found for user ID:', userId)
      console.log(error)
      return null;
  }
};

/* CREATE PROFILE   */
const createUserProfile = async () => {
  try {
    const newUserProfile = await db.one( 'INSERT INTO profiles ( user_id, dob, gender, marital_status, have_children, age_of_children, favorite_magazines, favorite_websites, favorite_songs, favorite_movies, favorite_activity, country, postal_code,creation_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8, $9, $10, $11, $12, $13, $14)',user_id, dob, gender, marital_status, have_children, age_of_children, favorite_magazines, favorite_websites, favorite_songs, favorite_movies, favorite_activity, country, postal_code,creation_date)
    return newUserProfile;
  } catch (error) {
    throw error;
  }
};

module.exports = {
getUserProfiles,
getUserProfile,
createUserProfile,
};