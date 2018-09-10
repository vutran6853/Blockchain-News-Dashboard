CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_firstname VARCHAR(255),
  user_lastname VARCHAR(255),
  user_email VARCHAR(255),
  user_url TEXT
)

INSERT INTO users (user_firstname, user_lastname, user_email, user_url )
VALUES ('John', 'Smith', 'johnsmith879@gmail.com', 'url picture placeholder'),
      ('Vu', 'Tran', 'vutran879@gmail.com', 'url picture placeholder')