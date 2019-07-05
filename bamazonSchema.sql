DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;
1
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (30) NOT NULL,
    department_name VARCHAR (30) NOT NULL,
    price DECIMAL (6,2) NOT NULL default 0,
    stock_quantity INT default 0,
    PRIMARY KEY (id)
);

