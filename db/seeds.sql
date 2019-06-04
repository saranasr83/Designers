

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
VALUES ("bag", "Chanel", "Boy", "Medium", 5200),("bag", "Dior", "Lady", "Medium", 4200),("bag", "Chanel", "Classic", "Medium", 4200),("belt", "Chanel", "Vanity", "Small", 3200);

SELECT * FROM items;