\c reflections;

INSERT INTO posts (id, user_id, post_made, title, content)
VALUES
  (1, 1, '2023-10-30', 'Struggling with Parenting Stress', 'Any advice on managing stress during pregnancy?'),
  (2, 2, '2023-10-30', 'Looking for Postpartum Depression Support', 'Feeling overwhelmed after childbirth, need someone to talk to.'),
  (3, 1, '2023-10-31', 'Recommendation for Therapist', 'Can anyone suggest a good therapist for postpartum depression in my area?'),
  (4, 3, '2023-11-01', 'Coping Strategies for New Parents', 'Share your best coping strategies for dealing with lack of sleep and baby-related stress.');

INSERT INTO comments (id, user_id, post_id, comment_made, content)
VALUES
  (1, 2, 1, '2023-11-02', "You're not alone! I went through the same stress during my pregnancy. Here are some tips that helped me..."),
  (2, 4, 3, '2023-11-03', "I recommend Dr. Emily Johnson; she's a fantastic therapist for postpartum depression."),
  (3, 1, 4, '2023-11-05', 'Getting enough rest and support from your partner is crucial during this time.'),
  (4, 3, 2, '2023-11-06', "I'm a family counselor, and I can help with family-related issues as well. Feel free to reach out.");


INSERT INTO users (id, fname, lname, email, phone, user_id, city, homestate, password_hash, profile_img, created_at) VALUES
('1', 'Madhu', 'Sudan', 'madhus@reflections.com', '212-212-2120', 'madhus', 'Boxx Town', 'NY', 'abc123', 'https://madhu.seas.harvard.edu/img/mugshot-12.jpg', CURRENT_TIMESTAMP ),
('2', 'John', 'Goodman', 'johng@reflections.com', '212-212-2121', 'johng', 'Boxx Town', 'NY', 'abc132', 'https://avatars.githubusercontent.com/u/16713737?v=4', CURRENT_TIMESTAMP ),
('3', 'Wes', 'Reid', 'wesr@reflections.com', '212-212-2122', 'wesr', 'Boxx Town', 'NY', 'abc312', 'https://avatars.githubusercontent.com/u/1316902?v=4', CURRENT_TIMESTAMP ),
('4', 'Rachel', 'Feldman', 'rachelf@reflections.com', '212-212-2123', 'rachelf', 'Boxx Town', 'NY', 'abc213', 'https://www.linkedin.com/in/rachel-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP );

