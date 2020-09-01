DROP TABLE IF EXISTS "recipes";

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  picture VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO recipes (name, description, picture) VALUES ('Alex', 'alex@description.com', 'test1');
INSERT INTO recipes (name, description, picture) VALUES ('Nataly', 'nataly@description.com', 'test2');
INSERT INTO recipes (name, description, picture) VALUES ('Hetty', 'hetty1336@example.com', 'test3');
INSERT INTO recipes (name, description, picture) VALUES ('Alphard', 'apha@example.com', 'test4');
INSERT INTO recipes (name, description, picture) VALUES ('Notransactions', 'none@example.com', 'test5');