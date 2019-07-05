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
    // console.log("Connected as id: " + connection.threadId);

    if (err) throw err;

    // Displays the products table from the bamazon_DB
    connection.query("SELECT * FROM products", function (err, res) {
        // console.log("selected table query")
        if (err) throw err;
        console.table(res);
        // run the start function after the connection is made to prompt the user
        start();
    });


});

// function which prompts the user for what item they would like to buy
function start() {
    inquirer
        .prompt([
            {
                name: "idBuy",
                type: "input",
                message: "Please select the ID of the product you would like to buy?",
                // choices: [
                //     "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "exit"
                // ]
            },
            {
                name: "buy",
                type: "input",
                message: `How many ${res[].product_name}would you like to buy?`
            }
        ])
        .then(function (answer) {

            parseInt(answer.idBuy);
            parseInt(answer.buy);

            var index = answer.idBuy - 1;
            connection.query("SELECT stock_quantity, price FROM products", function (err, res) {
                if (err) throw err;
                console.log(res[index].stock_quantity);
                console.log(answer.buy);

                if (answer.buy > res[index].stock_quantity) {
                    console.log("\nInsufficient quantity, please select a lower quantity\n");
                    start();
                }


                else {
                    var qtyUpdate = res[index].stock_quantity - answer.buy;
                    console.log(qtyUpdate);
                    var total = res[index].price * answer.buy;
                    console.log(res[index].price);
                    console.log(typeof (res[index].price));

                    console.log("\nYour Order has been placed.  Your Total is $ " + total.toFixed(2) + "\n");

                    connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: qtyUpdate
                            },
                            {
                                id: answer.idbuy
                            }
                        ],
                        function (err, res) {
                            if (err) throw err;
                            console.log(res.affectedRows + " products updated!\n");;
                        })
                };
            });
        });
}



    // When there are sufficient quantity, the order will process
    // function placeOrder() {
    // var index = answer.idBuy - 1;
    // var qtyUpdate = res[index].stock_quantity - answer.buy;
    // console.log(qtyUpdate);
    // var total = res[index].price * answer.buy;
    // console.log(total);

    // connection.query("UPDATE products SET ? WHERE ?", [{
    //     stock_quantity: qtyUpdate
    // },
    // {
    //     id: answer.idbuy
    // }],
    //     function (err, res) {
    //         if (err) throw err;

    //         console.log(typeof (answer.buy));

    //         console.log(res.affectedRows + `Your order has been placed.  Your total is ${total}`);
    //         start();
    //     });
    // }
