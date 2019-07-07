// npm packages: mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: 'password',
    database: "bamazon_DB"
});

// Global Variables:

// Display Products Table Function
function displayProductsTable() {
    connection.query("SELECT id, product_name, department_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        // run the start function after the connection is made to prompt the user
        start();
    });
};

// Check Quanity Function
function checkQty(id, qty) {
    connection.query("SELECT * FROM products WHERE id=?", [id], function (err, res) {
        if (qty > res[0].stock_quantity) {
            if (err) throw err;
            console.log(`\nCurrent stock has a quantity of ${res[0].stock_quantity}.  In order to place your order, please select a lower quantity\n`);
            start();
        }
        else {
            completePurchase(id, qty);
        }
    });
};

// Purchase Function
function completePurchase(id, qty) {
    connection.query("UPDATE products SET stock_quantity=stock_quantity-? WHERE id=?", [qty, id], function (err, res) {
        if (err) throw err;
    });
    printReceipt(id, qty);
    displayProductsTable();
};

// Print Receipt Function
function printReceipt(id, qty) {
    connection.query("SELECT * FROM products WHERE id=?", [id, qty], function (err, res) {
        if (err) throw err;
        var total = qty * res[0].price;
        console.log(`\nYou have ordered ${qty} ${res[0].product_name}(s).  Your Total is $ ` + `${total.toFixed(2)}` + "\n");
    });
};

// MAIN BODY OF THE PROGRAM:

// Connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;

    // Displays the products table from the bamazon_DB
    displayProductsTable();
});

// function which prompts the user for what item they would like to buy
function start() {
    inquirer
        .prompt([
            {
                name: "idBuy",
                type: "input",
                message: "Please select the ID of the product you would like to buy?",

            },
            {
                name: "buy",
                type: "input",
                message: `How many would you like to buy?`
            }
        ])
        .then(function (answer) {
            // parse from string to integer 
            parseInt(answer.idBuy);
            parseInt(answer.buy);

            // Check for quantity
            checkQty(answer.idBuy, answer.buy);
        });
};