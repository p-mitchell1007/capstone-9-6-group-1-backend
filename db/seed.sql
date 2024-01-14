-- //seed.sql



\c reflections;

INSERT INTO users (fname, lname, email, phone, password_hash, profile_img, created_at) VALUES
( 'Jayden', 'Whitehall', 'jadens@reflections.com', '646-729-2120', 'abc123', 'https://madhu.seas.harvard.edu/img/mugshot-12.jpg', CURRENT_TIMESTAMP ),
( 'Madhu', 'Sudan', 'madhus@reflections.com', '212-212-2120', 'abc123', 'https://madhu.seas.harvard.edu/img/mugshot-12.jpg', CURRENT_TIMESTAMP ),
( 'John', 'Goodman', 'johng@reflections.com', '212-212-2121', 'abc132', 'https://avatars.githubusercontent.com/u/16713737?v=4', CURRENT_TIMESTAMP ),
( 'Wes', 'Reid', 'wesr@reflections.com', '212-212-2123', 'abc312', 'https://avatars.githubusercontent.com/u/1316902?v=4', CURRENT_TIMESTAMP ),
( 'Tammy', 'Wynett', 'tammy@reflections.com', '212-212-2124', 'abc312', 'https://avatars.githubusercontent.com/u/1316902?v=4', CURRENT_TIMESTAMP ),
( 'Abbie', 'Normal', 'abbie@reflections.com', '212-212-2125', 'abc312', 'https://guardian.ng/wp-content/uploads/2018/11/o-MOTHER-AND-BABY-facebook.jpg', CURRENT_TIMESTAMP ),
( 'Barbie', 'Myslak', 'barbie@reflections.com', '212-212-2126', 'abc312', 'https://avatars.githubusercontent.com/u/1316902?v=4', CURRENT_TIMESTAMP ),
( 'Rachel', 'Feldman', 'rachelf@reflections.com', '212-212-2127', 'abc213', 'https://www.linkedin.com/in/rachel-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP ),
( 'Anita', 'Franklyn', 'anita@reflections.com', '212-212-2127', 'abc213', 'https://www.linkedin.com/in/anita-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP ),
( 'Angela', 'Franklyn', 'angela@reflections.com', '212-212-2127', 'abc213', 'https://www.linkedin.com/in/angela-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP ),
( 'Janice', 'Walker', 'janicew@reflections.com', '212-212-2127', 'abc213', 'https://www.linkedin.com/in/janice-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP ),
( 'Adam', 'Selene', 'adam@reflections.com', '212-212-2127', 'abc213', 'https://www.linkedin.com/in/adam-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP ),
( 'Debbie', 'Warren', 'debbie@reflections.com', '212-212-2127', 'abc213', 'https://www.linkedin.com/in/debbie-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP ),
( 'Kaley', 'Cuoco', 'kaley@reflections.com', '212-212-2127', 'abc213', 'https://metro.co.uk/wp-content/uploads/2023/08/SEC_166893054-5b0c.jpg?quality=90&strip=all&zoom=1&resize=644%2C338', CURRENT_TIMESTAMP ),
( 'Annette', 'Flemming', 'annette@reflections.com', '212-212-2127', 'abc213', 'https://www.linkedin.com/in/annette-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP ),
( 'Helen', 'Brown', 'helen@reflections.com', '212-212-2127', 'abc213', 'https://www.linkedin.com/in/Janice-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP ),
( 'Rachel', 'Green', 'rachelG@reflections.com', '212-212-2127', 'abc213', 'https://www.linkedin.com/in/Janice-f-3b7ab858/overlay/photo/', CURRENT_TIMESTAMP );


INSERT INTO posts ( user_id, post_made, title, content)
VALUES
  ( 4, '2023-11-03', 'How can I help my wife deal with her mood swings?', 'She doesn''t even think she''s experiencing mood swings.  But by the time I catch up with one of her moods, she'' in a completely different place. Any advice is could be helpful.'),
  ( 1, '2023-10-30', 'Struggling with Parenting Stress', 'Any advice on managing stress during pregnancy?'),
  ( 2, '2023-10-30', 'Looking for Postpartum Depression Support', 'Feeling overwhelmed after childbirth, need someone to talk to.'),
  ( 1, '2023-10-31', 'Recommendation for Therapist', 'Can anyone suggest a good therapist for postpartum depression in my area?'),
  ( 3, '2023-11-01', 'Coping Strategies for New Parents', 'Share your best coping strategies for dealing with lack of sleep and baby-related stress.'),
  ( 5, '2023-11-01', 'I Have Been There!', 'Sometimes you just have to deal with it as best you can.'),
  ( 13, '2023-11-02', 'Lorem ipsum dolor sit amet!', 'Lorem ipsum dolor sit amet. Ex repellendus ipsum non aliquam possimus eum natus consequuntur ea labore repellat. Non eveniet earum est quasi deleniti ex unde dolores id laudantium eveniet.'),
  ( 5, '2023-11-02', 'Et illum veritatis quo ipsam!', 'Et illum veritatis quo ipsam obcaecati et quibusdam dolor ut veniam enim. 33 rerum libero cum velit amet quo numquam repellendus est assumenda modi! Ut vitae voluptates sit necessitatibus sunt est dolorum dolore ad deserunt nisi ut asperiores eveniet.');

INSERT INTO comments (user_id, post_id, comment_made, content)
VALUES

  (2, 1, '2023-11-02', 'You''re not alone! I went through the same stress during my pregnancy. Here are some tips that helped me.'),
  (5, 2, '2023-11-02', 'Prioritize Yourself.Everyone wants to touch and cuddle baby after birth, but don''t let yourself and your needs get lost in all the infant adoration. The best thing for a new baby is a mother who is happy, healthy, and supported. Make sure you are getting everything you need, including nutritious food, lots of fluids, and adequate rest. Sometimes, that means asking for help outside of your immediate family — consider asking your community to help with meals or care for older children. One way to make sure you''re connecting with yourself during the postpartum period is to prioritize doing one "normal" thing each day. Try taking a walk, having a relaxing shower, or seeing a friend.'),
  (7, 1, '2023-11-02', 'Don''t skimp on rest...The old adage "sleep when the baby sleeps" is definitely true during the postpartum time period. Getting enough rest is so important to ensure you have a successful postpartum recovery. It''s much easier said than done with a newborn in the house, of course, but make every effort to rest as much as you can. Enlist your partner or other support people to take shifts with the baby or complete other chores or tasks so you can nap. And don''t sweat the small stuff — it''s much more important that you''re well-rested than it is to have an empty dishwasher or scrubbed floors.'),
  (3, 1, '2023-11-04', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'),
  (4, 3, '2023-11-03', 'I recommend Dr. Emily Johnson; she''s a fantastic therapist for postpartum depression.'),
  (8, 4, '2023-11-05', 'Getting enough rest and support from your partner is crucial during this time.'),
  (9, 5, '2023-11-05', 'Be calm and carry on!'),
  (2, 5, '2023-11-05', 'Try to avoid giving in to all the noise in your head.'),
  (4, 5, '2023-11-05', 'Try talking to someone you trust.'),
  (3, 2, '2023-11-06', 'I am a family counselor, and I can help with family-related issues as well. Feel free to reach out.'),
  (7, 6, '2023-11-03', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'),
  (13, 6, '2023-11-03', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'),
  (10, 6, '2023-11-03', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'),
  (13, 1, '2023-11-06', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.');


-- INSERT INTO articles (title, author, creation_date, article_preview)
-- VALUES
--   ( '6 Tips For Managing The 4th Trimester & Postpartum Depression', 'SydneyP', '2023-05-08', 'The journey of motherhood is a miraculous and life-changing experience. However, it can also bring forth unexpected challenges that can impact the well-being of both the mother and their newborn. One crucial yet often overlooked stage is the 4th trimester, where postpartum depression can emerge as a significant concern...'),
--   ( 'Postpartum Depression', 'MyaC', '2023-07-15', 'Your body and mind go through many changes during and after pregnancy. If you feel sad, anxious, or overwhelmed...'),
--   ( 'Postpartum Depression: Causes, Symptoms & Treatment', 'SaraN', '2022-10-17', 'Postpartum depression is a type of depression that happens after having a baby. It affects up to 15% of people...'),
--   ( 'First Poop After Giving Birth: What Postpartum Mums Should Expect', 'Bianchi Mendoza', '2022-10-17', '''Baby''s out, the hardest part is over.'' Most of us mums know that''s not true.  Aside from stepping into your new role as a parent, you also have to think about postpartum recover—such as the first poop after giving birth.'),
--   ('What are the types of postpartum depression?', 'LucyH', '2022-12-12', 'There are three different types of postpartum mood disorders...');

-- These tables are a future feature
-- INSERT INTO profiles (user_id, dob, gender, marital_status, have_children, age_of_children, favorite_magazines, favorite_websites, favorite_songs, favorite_movies, favorite_activity, country, postal_code, creation_date)
-- VALUES
--   ( 1, '1998-12-25', 'Woman', 'Married', TRUE, '{3, 1}', '{"Redbook","O","Mademoiselle"}','{"oprah.com","https://www.womenhealth1.com/"}','{"The Climb","Girls Just Wanna Have Fun","I am Woman","You and Me Against The World"}','{"Out Of Africa","Sense and Sensibility"}','{"Knitting","Cooking","Arts and Crafts"}','USA', '10010', now()),
--   ( 2, '1996-12-25', 'Woman', 'Married', TRUE, '{3, 3, 1}', '{"Redbook","O","Mademoiselle"}','{"oprah.com","https://www.womenandinfants.org/services/pregnancy/postpartum-health"}','{"The Climb","Girls Just Wanna Have Fun","I am Woman","You and Me Against The World"}','{"Mr. Wonderful","Eat, Pray, Love"}','{"Knitting","Cooking","Arts and Crafts"}', 'USA', '10010', now()),
--   ( 3, '2002-09-17', 'Woman', 'Married', TRUE, '{1}', '{"Redbook","O","Mademoiselle"}','{"oprah.com","https://www.womenhealth1.com/"}','{"The Climb","Girls Just Wanna Have Fun","I am Woman","You and Me Against The World"}','{"Terms of Endearment","The Elephant Man"}','{"Knitting","Cooking","Arts and Crafts"}', 'USA', '10010',now()),
--   (4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
--   (5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
--   (6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
--   (7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- INSERT INTO friends (user_id, friend_id, created_at) VALUES 
-- (1,2,now()),
-- (1,3,now()),
-- (1,5,now()),
-- (1,9,now()),
-- (3,9,now()),
-- (3,4,now()),
-- (3,5,now()),
-- (3,6,now());


