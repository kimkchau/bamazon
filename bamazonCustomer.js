// TODO: download npm packages mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

// var keys = require("./keys");

// to access the keys informaiton in mysql
// var Mysql = new mysql(keys.Mysql);

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: 'password',
    database: "bamazon_DB"
});


// connect to the mysql server and sql database
connection.connect(function (err) {
    console.log("Connected as id: " + connection.threadId);
    
    if (err) throw err;
    // run the start function after the connection is made to promp the user
    
    connection.query("SELECT  FROM products", function (err, res) {
        console.log("selected table query")
        if (err) throw err;
        console.table(res);
    });



    start();
});

// console.table(products);

// function which prompts the user for what item they would like to buy
function start() {
    inquirer
        .prompt({
            name: "idBuy",
            type: "list",
            message: "Please select the ID of the product you would like to buy?",
            choices: [
                "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "exit"
            ]
        })
        .then(function (answer) {
            switch (answer.idBuy) {
                case "1":
                    console.log("selected id 1")
                    buyUnit1();
                    break;

                case "2":
                    console.log("selected id 2");
                    buyUnit2();
                    break;

                case "exit":
                    console.log("selected exit");
                    connection.end();
                    break;

            }

            // function buyUnit1() {
            //     inquirer
            //     .prompt({
            //         name: "buy",
            //         type: "input",
            //         message: "How many would you like to buy?"
            //     })
            //     .then(function(answer) {
            //         var query = "SELECT "
            //     })
            // }
        });





}


// TODO: first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// TODO: prompt users with two messages: (first) Ask them the ID of the product they would like to buy (second) Ask how many units of the product they would like to buy
// TODO: 