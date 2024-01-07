const bcrypt = require('bcrypt');

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function comparePasswords(inputPassword, hashedPassword) {
  return bcrypt.compareSync(inputPassword, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePasswords,
};