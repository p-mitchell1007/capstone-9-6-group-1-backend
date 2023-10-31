DROP DATABASE IF EXISTS reflections;

CREATE DATABASE reflections;

\c reflections;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    post_created TIMESTAMP,
    title VARCHAR(200),
    content TEXT
);