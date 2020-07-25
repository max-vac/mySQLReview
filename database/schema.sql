DROP DATABASE IF EXISTS foodDB;

CREATE DATABASE foodDB;

USE foodDB;

CREATE TABLE food (
  id INT NOT NULL auto_increment PRIMARY KEY,
  name VARCHAR(300) NOT NULL,
  price INT NOT NULL,
  rating INT NOT NULL,
  daveRATE INT NOT NULL
);

-- INSERT INTO food (name, price, rating, daveRATE) VALUES ("ramen", 5, 3, 5);
-- INSERT INTO food (name, price, rating, daveRATE) VALUES ("brussell sprouts", 2, 5, 9000);
-- INSERT INTO food (name, price, rating, daveRATE) VALUES ("spinach", 4, 5, 100);
-- INSERT into food (name, price, rating, daveRATE) VALUES ("pizza", 5, 9, 0);
-- INSERT INTO food (name, price, rating, daveRATE) VALUES ("grilled cheese", 5, 10, 9);
-- INSERT INTO food (name, price, rating, daveRATE) VALUES ("bbq", 6, 9, 10);
-- INSERT INTO food (name, price, rating, daveRATE) VALUES ("burrito", 7, 10, 6);
-- INSERT INTO food (name, price, rating, daveRATE) VALUES ("dave", 10, 10, 10);
-- INSERT INTO food (name, price, rating, daveRATE) VALUES ("soul food", 10, 10 , 10);