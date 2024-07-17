-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE IF NOT EXISTS ecommerce_db;

USE ecommerce_db;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS productTag;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS category;

CREATE TABLE category(
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE product(
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) UNIQUE NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price = CAST(price AS DECIMAL (10, 2))),
    stock INT NOT NULL DEFAULT 10,
    category_id INT,
    FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE tag(
    id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(255) NOT NULL
);

CREATE TABLE productTag(
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    tag_id INT,
    FOREIGN KEY(product_id) REFERENCES product(id),
    FOREIGN KEY(tag_id) REFERENCES tag(id)
);

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

