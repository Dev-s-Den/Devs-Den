DROP TABLE IF EXISTS forums CASCADE;
CREATE TABLE forums (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL, 
  img VARCHAR(255) NOT NULL,
);