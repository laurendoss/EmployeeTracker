const inquirer = require("inquirer"); 
const mysql = require("mysql"); 
const cTable = require("console.table"); 

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Mailey2020",
    database: "employee_db"
  });