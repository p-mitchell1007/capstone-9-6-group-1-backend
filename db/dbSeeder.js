// backend/db/dbSeeder.js

const bcryptHelper = require('../bcryptHelper'); 
const db = require('./db/dbConfig');

// Define user data with passwords
const userData = [
  { fname: 'Madhu', lname: 'Sudan', email: 'madhus@reflections.com', phone: '212-212-2120', img: 'https://madhu.seas.harvard.edu/img/mugshot-12.jpg' },
  // ... (other users)
];

// Keep track of original passwords for each user
const originalPasswords = [];

// Hash passwords for all users
const hashedUserPasswords = userData.map(user => {
  const originalPassword = `abc${Math.floor(Math.random() * 1000)}`; // Random password for each user
  originalPasswords.push({ email: user.email, password: originalPassword });

  return {
    ...user,
    password: bcryptHelper.hashPassword(originalPassword),
  };
});

// Generate SQL queries for user insertion
const sqlQueries = hashedUserPasswords.map(user => `
  INSERT INTO users (fname, lname, email, phone, password_hash, profile_img, created_at) VALUES
  ( '${user.fname}', '${user.lname}', '${user.email}', '${user.phone}', '${user.password}', '${user.img}', CURRENT_TIMESTAMP )
`);

// Execute the SQL queries and perform other necessary initialization steps
sqlQueries.forEach((sqlQuery, index) => {
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.error(`Error seeding user ${index + 1}:`, err);
    } else {
      console.log(`User ${index + 1} seeded successfully. Original password: ${originalPasswords[index].password}`);
      // Additional initialization steps if needed...
    }

    // Close the database connection or handle other cleanup tasks if this is the last query
    if (index === sqlQueries.length - 1) {
      db.end();
    }
  });
});
