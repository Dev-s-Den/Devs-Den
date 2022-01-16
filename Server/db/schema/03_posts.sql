DROP TABLE IF EXISTS posts CASCADE;
CREATE TABLE posts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, 
  forum_id INTEGER REFERENCES forums(id) ON DELETE CASCADE,
  content VARCHAR(255) NOT NULL,
  img VARCHAR(255), 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);