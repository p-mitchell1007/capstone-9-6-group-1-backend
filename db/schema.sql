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