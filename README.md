# Bamazon
This project is an Amazon-like storefront with a MySQL database.  The app takes in orders from customers and will deplete stock from the store's inventory.  The MySQL and Inquirer npm Node packages was used in the app.

## Overview: Customer View
1. A MySQL Database called 'bamazon' was created which includes a table called 'products'.  
1. The 'products' table has the following columns: item_id, product_name, department_name, price, stock_quantity
1. The table was manually populated with 10 different products 
1. In the Node application called 'bamazonCustomer.js' the customer will initially see a table with all the items available for purchase
1. The app will then prompt the user with two messages: 
    1. Please select the ID of the product you would like to buy?
    1. How many units of the product would you like to buy?
1. The application will then check if the store has enough of the product to meet the customer's request. 
    1. If there's not enough, the app will notify the customer of insufficient quantity and will prevent the order from being placed.  
    1. If there is sufficient quantity, the app will fulfill the customer's order.  The SQL database will update to reflect the change in quantity and the customer will be notified of the total cost of their purchase.

## Getting Started

### Prerequisites
1. Node.js must be installed.  See https://nodejs.org/en/download/ for instructions.
1. MySQL must be installed.  See https://dev.mysql.com/downloads/installer/ for instructions.

## Installing
1. Install source files, use git to clone files from https://github.com/kimkchau/bamazon
1. In the Terminal or Visual Studio Code Terminal, navigate to downloaded file directory 
1. Install the mysql and inquirer Node packages by entering the following in the terminal: npm install
1. Create the mysql database:
    1. In the Terminal, navigate (cd) to where the file is located
    1. Connect to mysql by entering in the terminal `mysql -uroot -p`
    1. Enter 'password when prompted
    1. Enter 'source bamazon.sql'
    1. Several 'Query OK' messages will display, which indicates that the database was successfully created.

### Operation
The Bamazon app can be operated by entering `node bamazonCustomer` in the terminal.  User will see a table of all items available for purchase and will be prompted for which item they would like to purchase followed by the quantity.

## Testing
Please see the video below that documents testing of the app.
https://youtu.be/Oi3QwCMPhvk
 
### Deployment
Navigate to https://github.com/kimkchau/bamazon to clone

### Built With
Visual Studio Code

### Author
Kim Chau - https://github.com/kimkchau/bamazon

### License
This project is not licensed
