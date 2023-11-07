const db = require("../db/dbConfig.js");

const getAllPosts = async () => {
  try {
    const allPosts = await db.any("SELECT * FROM posts");
    return allPosts;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllPosts,
};
