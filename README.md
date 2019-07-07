# bamazon
This project an Amazon-like storefront with a MySQL database was created.  The app takes in orders from customers and deplete stock from the store's invertory.  The MySQL and Inquirer npm packages was used in the app.

## Overview: Customer View
1. A MySQL Database called 'bamazon' was created which includes a table called 'products'.  
1. The 'products' table has the followig columns: item_id, product_name, department_name, price, stock_quantity
1. The table was manually populated with 10 different products 
1. In the Node application called 'bamazonCustomer.js' the customer will initially see a table with all the items available for purchase
1. The app will then prompt the user with two mesaages: 
    1. Please select the ID of the product you would like to buy?
    1. How many units of the product would you like to buy?
1. The application will then check if the store has enough of the product to meet the customer's request. 
    1. If there's not enough, the app will notify the customer of insufficient quantity and will prevent the order from being placed.  
    1. If there is sufficient quantity, the app will fulfill the customer's order.  The SQL database will update to reflect the change in quantity and the customer will be notified of the total cost of their purchase.

## Getting Started

### Preprequistes
1. Node.js must be installed.  See https://nodejs.org/en/download/ for instructions.
1. MySQL must be installed.  See https://dev.mysql.com/downloads/installer/ for instructions.

## Installing





 