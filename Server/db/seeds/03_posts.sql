INSERT INTO posts (user_id, forum_id, content, img)
 VALUES ('1', '2', '```js
function test () {
  for (let test of tests) {
  Hello there mister
  }
return too late mister
};
 ```
', 'https://i.imgur.com/fuOFQoH.png'),
  ('1', '1', 'How do I create a branch and checkout at the same time? ', 'https://i.imgur.com/fuOFQoH.png'), 
  ('3', '2', 'How did Jose Alex and Nico make this amazing app?', 'https://i.imgur.com/fuOFQoH.png'),
  ('2', '1', 'I Love Spagheti and meetballs? ', 'https://i.imgur.com/fuOFQoH.png'), 
  ('3', '1', 'What is the answer to life and the universe', 'https://i.imgur.com/fuOFQoH.png'),
  ('1', '7', 'I tried selecting everything in a table but did not work
  ```sql
  SELECT * FROM table
  ```
  Can someone help?', null),
  ('2', '7', 'How do you perform the equivalent of Oracles `DESCRIBE TABLE` in PostgreSQL (using the psql command)?', null),
  ('3', '7', 'I am trying to automate database creation process with a shell script and one thing I have hit a road block with passing a password to psql. Here is a bit of code from the shell script:
  ```sql
  psql -U $DB_USER -h localhost -c"$DB_RECREATE_SQL"
  ```
  How do I pass a password to `psql` in a non-interactive way?', null)


