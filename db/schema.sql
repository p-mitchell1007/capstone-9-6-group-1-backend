DROP DATABASE IF EXISTS reflections;
CREATE DATABASE reflections;

\c reflections;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES Users(id),
  post_made DATE,
  title TEXT,
  content TEXT
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES Users(id),
  post_id INTEGER REFERENCES Posts(id),
  comment_made DATE,
  content TEXT
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT,
  lname TEXT,
  email TEXT,
  phone VARCHAR(15),
  user_id INTEGER REFERENCES Users(id),
  city VARCHAR(50),
  homestate VARCHAR(50),
  password_hash VARCHAR(255),
  profile_img TEXT,
  created_at TIMESTAMP DEFAULT
);

DROP TABLE IF EXISTS direct_message;

CREATE TABLE direct_message (
    id SERIAL PRIMARY KEY,
    message_subject TEXT,
    message_content TEXT,
    send_date TIMESTAMP,
    parent_id INTEGER FOREIGN KEY,
    sender_id INTEGER FOREIGN KEY
);

DROP TABLE IF EXISTS message_reciever;

CREATE TABLE message_reciever (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER FOREIGN KEY,
    receiver_id INTEGER FOREIGN KEY,
    message_id INTEGER FOREIGN KEY,
    reply_at TIMESTAMP,
);