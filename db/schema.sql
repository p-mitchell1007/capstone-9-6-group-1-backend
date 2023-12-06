DROP DATABASE IF EXISTS reflections;
CREATE DATABASE reflections;

\c reflections;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  post_made DATE,
  title TEXT,
  content VARCHAR
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES Users(id),
  post_id INTEGER REFERENCES Posts(id),
  comment_made DATE,
  content VARCHAR
);


DROP TABLE IF EXISTS articles;

CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    author TEXT,
    creation_date DATE,
    article_preview TEXT
);