\c reflections;

INSERT INTO posts (id, user_id, post_made, title, content)
VALUES
  (1, 1, '2023-10-30', 'Struggling with Parenting Stress', 'Any advice on managing stress during pregnancy?'),
  (2, 2, '2023-10-30', 'Looking for Postpartum Depression Support', 'Feeling overwhelmed after childbirth, need someone to talk to.'),
  (3, 1, '2023-10-31', 'Recommendation for Therapist', 'Can anyone suggest a good therapist for postpartum depression in my area?'),
  (4, 3, '2023-11-01', 'Coping Strategies for New Parents', 'Share your best coping strategies for dealing with lack of sleep and baby-related stress.');

INSERT INTO Comments (id, user_id, post_id, comment_made, content)
VALUES
  (1, 2, 1, '2023-11-02', 'You're not alone! I went through the same stress during my pregnancy. Here are some tips that helped me...'),
  (2, 4, 3, '2023-11-03', 'I recommend Dr. Emily Johnson; she's a fantastic therapist for postpartum depression.'),
  (3, 1, 4, '2023-11-05', 'Getting enough rest and support from your partner is crucial during this time.'),
  (4, 3, 2, '2023-11-06', 'I'm a family counselor, and I can help with family-related issues as well. Feel free to reach out.');
