-- //seed.sql



\c reflections;

INSERT INTO users (fname, lname, email, phone, city, homestate, password_hash, profile_img, created_at) VALUES
( 'Madhu', 'Sudan', 'madhus@reflections.com', '212-212-2120', 'Boxx Town', 'NY', 'abc123', 'https://madhu.seas.harvard.edu/img/mugshot-12.jpg', CURRENT_TIMESTAMP ),
( 'John', 'Goodman', 'johng@reflections.com', '212-212-2121', 'Boxx Town', 'NY', 'abc132', 'https://avatars.githubusercontent.com/u/16713737?v=4', CURRENT_TIMESTAMP ),
( 'Wes', 'Reid', 'wesr@reflections.com', '212-212-2123', 'Boxx Town', 'NY', 'abc312', 'https://avatars.githubusercontent.com/u/1316902?v=4', CURRENT_TIMESTAMP ),
( 'Tammy', 'Wynett', 'wesr@reflections.com', '212-212-2124', 'Boxx Town', 'NY', 'abc312', 'https://avatars.githubusercontent.com/u/1316902?v=4', CURRENT_TIMESTAMP ),
( 'Abbie', 'Normal', 'wesr@reflections.com', '212-212-2125', 'Boxx Town', 'NY', 'abc312', 'https://guardian.ng/wp-content/uploads/2018/11/o-MOTHER-AND-BABY-facebook.jpg', CURRENT_TIMESTAMP ),
( 'Barbie', 'Myslak', 'wesr@reflections.com', '212-212-2126', 'Boxx Town', 'NY', 'abc312', 'https://avatars.githubusercontent.com/u/1316902?v=4', CURRENT_TIMESTAMP ),
( 'Rachel', 'Feldman', 'rachelf@reflections.com', '212-212-2127', 'Boxx Town', 'NY', 'abc213', 'https://www.linkedin.com/in/rachel-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP );


INSERT INTO posts ( user_id, post_made, title, content)
VALUES
  ( 1, '2023-10-30', 'Struggling with Parenting Stress', 'Any advice on managing stress during pregnancy?'),
  ( 2, '2023-10-30', 'Looking for Postpartum Depression Support', 'Feeling overwhelmed after childbirth, need someone to talk to.'),
  ( 1, '2023-10-31', 'Recommendation for Therapist', 'Can anyone suggest a good therapist for postpartum depression in my area?'),
  ( 3, '2023-11-01', 'Coping Strategies for New Parents', 'Share your best coping strategies for dealing with lack of sleep and baby-related stress.'),
  ( 5, '2023-11-01', 'I Have Been There!', 'Sometimes you just have to deal with it as best you can.');

INSERT INTO comments (user_id, post_id, comment_made, content)
VALUES

  (2, 1, '2023-11-02', 'You''re not alone! I went through the same stress during my pregnancy. Here are some tips that helped me...'),
  (4, 3, '2023-11-03', 'I recommend Dr. Emily Johnson; she''s a fantastic therapist for postpartum depression.'),
  (1, 4, '2023-11-05', 'Getting enough rest and support from your partner is crucial during this time.'),
  (1, 5, '2023-11-05', 'Be calm and carry on!'),
  (2, 5, '2023-11-05', 'Try to avoid giving in to all the noise in your head.'),
  (4, 5, '2023-11-05', 'Try talking to someone you trust.'),
  (3, 2, '2023-11-06', 'I am a family counselor, and I can help with family-related issues as well. Feel free to reach out.');


-- INSERT INTO articles (title, author, creation_date, article_preview)
-- VALUES
--   ( '6 Tips For Managing The 4th Trimester & Postpartum Depression', 'SydneyP', '2023-05-08', 'The journey of motherhood is a miraculous and life-changing experience. However, it can also bring forth unexpected challenges that can impact the well-being of both the mother and their newborn. One crucial yet often overlooked stage is the 4th trimester, where postpartum depression can emerge as a significant concern...'),
--   ( 'Postpartum Depression', 'MyaC', '2023-07-15', 'Your body and mind go through many changes during and after pregnancy. If you feel sad, anxious, or overwhelmed...'),
--   ( 'Postpartum Depression: Causes, Symptoms & Treatment', 'SaraN', '2022-10-17', 'Postpartum depression is a type of depression that happens after having a baby. It affects up to 15% of people...'),
--   ( 'First Poop After Giving Birth: What Postpartum Mums Should Expect', 'Bianchi Mendoza', '2022-10-17', '''Baby''s out, the hardest part is over.'' Most of us mums know that''s not true.  Aside from stepping into your new role as a parent, you also have to think about postpartum recover—such as the first poop after giving birth.'),
--   ('What are the types of postpartum depression?', 'LucyH', '2022-12-12', 'There are three different types of postpartum mood disorders...');


INSERT INTO profiles (user_id, dob, gender, marital_status, have_children, age_of_children, favorite_magazines, favorite_websites, favorite_songs, favorite_movies, favorite_activity, country, postal_code, creation_date)
VALUES
  ( 1, '1998-12-25', 'Woman', 'Married', TRUE, '{3, 1}', '{"Redbook","O","Mademoiselle"}','{"oprah.com","https://www.womenhealth1.com/"}','{"The Climb","Girls Just Wanna Have Fun","I am Woman","You and Me Against The World"}','{"Out Of Africa","Sense and Sensibility"}','{"Knitting","Cooking","Arts and Crafts"}','USA', '10010', now()),
  ( 2, '1996-12-25', 'Woman', 'Married', TRUE, '{3, 3, 1}', '{"Redbook","O","Mademoiselle"}','{"oprah.com","https://www.womenandinfants.org/services/pregnancy/postpartum-health"}','{"The Climb","Girls Just Wanna Have Fun","I am Woman","You and Me Against The World"}','{"Mr. Wonderful","Eat, Pray, Love"}','{"Knitting","Cooking","Arts and Crafts"}', 'USA', '10010', now()),
  ( 3, '2002-09-17', 'Woman', 'Married', TRUE, '{1}', '{"Redbook","O","Mademoiselle"}','{"oprah.com","https://www.womenhealth1.com/"}','{"The Climb","Girls Just Wanna Have Fun","I am Woman","You and Me Against The World"}','{"Terms of Endearment","The Elephant Man"}','{"Knitting","Cooking","Arts and Crafts"}', 'USA', '10010',now()),
  (4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);










