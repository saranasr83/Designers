DROP DATABASE IF EXISTS products_db;
CREATE DATABASE products_db;

USE products_db;


CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  kind VARCHAR(45) NULL,
  brand VARCHAR(45) NULL,
  model VARCHAR(45) NULL,
  size VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  PRIMARY KEY (id) 
);

INSERT INTO items (kind, brand, model, size, price)
VALUES ("bag", "Chanel", "Boy", "Medium", 5200),("bag", "Dior", "Lady", "Medium", 4200);

SELECT * FROM items;