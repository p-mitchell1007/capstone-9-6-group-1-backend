SELECT users.id, fname, lname, phone, password_hash, profile_img, posts.id, posts.title, posts.content, comments.id, comments.content
FROM users
INNER JOIN posts
ON users.id = posts.user_id
INNER JOIN comments
ON comments.post_id = posts.id
WHERE users.id = 1;