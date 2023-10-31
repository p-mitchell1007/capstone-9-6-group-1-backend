DROP DATABASE IF EXISTS reflections;

CREATE DATABASE reflections;

\c reflections;

DROP TABLE IF EXISTS _posts

CREATE TABLE _posts (
  id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES Users(id),
  post_made DATE,
  title TEXT,
  content TEXT
);