
// userQueries.js

const db = require('../db/dbConfig.js');

const getAllUsers = async () => {
  try {
    const users = await db.any('SELECT * FROM users');
    return users;
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    return null;
  }
};

const getUserById = async (userId) => {
  try {
    const user = await db.one('SELECT * FROM users WHERE id = $1', userId);
    return user;
  } catch (error) {
    console.error(`Error in getUserById for userId ${userId}:`, error);
    return null;
  }
};




const isEmailAvailable = async (email) => {
  try {
    const existingUser = await db.oneOrNone('SELECT * FROM users WHERE email = $1', email);
    return !existingUser; // Return true if email is available, false if already exists
  } catch (error) {
    console.error('Error in isEmailAvailable:', error);
    return false; // Assume not available in case of an error
  }
};

const createUser = async (firstName, lastName = '', email, phone = '', city = '', homestate = '', profile_img = '') => {
  try {
    const emailAvailable = await isEmailAvailable(email);

    if (!emailAvailable) {
      return { error: 'Email is already in use.' };
    }

    const newUser = await db.one('INSERT INTO users (fname, lname, email, phone, city, homestate, profile_img) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id', [firstName, lastName, email, phone, city, homestate, profile_img]);
    return newUser;
  } catch (error) {
    console.error('Error in createUser:', error);
    return { error: 'Server Error. Please Try Again.' };
  }
};



const updateUser = async (userId, firstName, lastName, email, phone, city, homestate, profile_img) => {
  try {
    const updatedUser = await db.one('UPDATE users SET fname = $2, lname = $3, email = $4, phone = $5, city = $6, homestate = $7, profile_img = $8 WHERE id = $1 RETURNING *', [userId, firstName, lastName, email, phone, city, homestate, profile_img]);
    return updatedUser;
  } catch (error) {
    console.error(`Error in updateUser for userId ${userId}:`, error);
    return null;
  }
};

const deleteUser = async (userId) => {
  try {
    await db.none('DELETE FROM users WHERE id = $1', userId);
  } catch (error) {
    console.error(`Error in deleteUser for userId ${userId}:`, error);
  }
};

const createUserProfile = async (name, age, reasonForJoining) => {
  try {
    const newUserProfile = await db.one('INSERT INTO user_profiles (name, age, reason_for_joining) VALUES ($1, $2, $3) RETURNING *', [name, age, reasonForJoining]);
    return newUserProfile;
  } catch (error) {
    console.error('Error in createUserProfile:', error);
    return null;
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createUserProfile,
};



