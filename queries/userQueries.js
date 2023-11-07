const db = require('../db/dbConfig.js'); 

const getAllUsers = async () => {
  try {
    const users = await db.any('SELECT * FROM users');
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const user = await db.one('SELECT * FROM users WHERE id = $1', userId);
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = async (fname, lname, email, phone, city, homestate, password_hash, profile_img) => {
  try {
    const newUser = await db.one('INSERT INTO users (fname, lname, email, phone, city, homestate, password_hash, profile_img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [fname, lname, email, phone, city, homestate, password_hash, profile_img]);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userId, fname, lname, email, phone, city, homestate, password_hash, profile_img) => {
  try {
    const updatedUser = await db.one('UPDATE users SET fname = $2, lname = $3, email = $4, phone = $5, city = $6, homestate = $7, password_hash = $8, profile_img = $9 WHERE id = $1 RETURNING *', [userId, fname, lname, email, phone, city, homestate, password_hash, profile_img]);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    await db.none('DELETE FROM users WHERE id = $1', userId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
