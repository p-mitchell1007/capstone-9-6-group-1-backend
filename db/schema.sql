DROP DATABASE IF EXISTS reflections;
CREATE DATABASE reflections;

\c reflections;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fname TEXT,
  lname TEXT,
  email TEXT,
  phone VARCHAR(15),
  city VARCHAR(50),
  homestate VARCHAR(50),
  password_hash VARCHAR(255),
  profile_img TEXT,
  created_at TIMESTAMP DEFAULT now()
);


DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  post_made DATE,
  title TEXT,
  content VARCHAR(300)
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id),
  comment_made DATE,
  content VARCHAR(300)
);


DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    author TEXT,
    creation_date DATE,
    article_preview TEXT
);

DROP TABLE IF EXISTS profiles;
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    dob DATE,
    gender VARCHAR(5),
    -- marital_status: single, married, separated, divorced
    marital_status VARCHAR(10),
    have_children BOOLEAN,
    -- age_of_children is an array.  syntax: { age1, age2,..ageN }
    age_of_children INT[],
    -- favorite_magazies is an array
    favorite_magazines TEXT[],
    -- favorite_websites is an array
    favorite_websites TEXT[],
    -- favorite_songs is an array
    favorite_songs TEXT[],
    -- favorite_movies is an array
    favorite_movies TEXT[],
    -- favorite_activity is an array
    favorite_activity TEXT[],
    country TEXT,
    postal_code TEXT,
    creation_date DATE
);