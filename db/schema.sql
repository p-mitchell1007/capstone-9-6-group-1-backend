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