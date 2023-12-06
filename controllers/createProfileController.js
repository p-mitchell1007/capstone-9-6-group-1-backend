
const express = require('express');
const axios = require('axios');
const router = express.Router();

const getRandomUserData = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    const userData = response.data.results[0];
    
  
    const { name, email, phone, location, picture } = userData;
    
    return {
      name: `${name.first} ${name.last}`,
      email,
      phone,
      city: location.city,
      homestate: location.state,
      profile_img: picture.large,
    };
  } catch (error) {
    throw error;
  }
};

const createUserProfileWithRandomData = async () => {
  try {
    const randomUserData = await getRandomUserData();
    const { name, email, phone, city, homestate, profile_img } = randomUserData;

    const newUserProfile = await createUserProfile(name, 25, 'Exploring');

    const newUser = await createUser(name, '', email, phone, city, homestate, profile_img);

    return {
      message: 'Profile created successfully with random data',
      userProfile: newUserProfile,
      user: newUser,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// createUserProfileWithRandomData()
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

module.exports = router;





