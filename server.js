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



  function promptUser(){
    console.log(`
    ╔═══╗─────╔╗
    ║╔══╝─────║║
    ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗
    ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣
    ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣
    ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝
    ───────║║──────╔═╝║
    ───────╚╝──────╚══╝
    ╔═╗╔═╗
    ║║╚╝║║
    ║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
    ║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
    ║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
    ╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
    ──────────────╔═╝║
    ──────────────╚══╝
    `)
        


    inquirer.prompt([
        {
            type: "list",
            name: "Action",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Management",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager"
            ]
        }
      ]).then(function(data){
          console.log(data)
          //We now have the user's action choice. 
          //Based on that choice, present them with new Questions
      })
  }
  promptUser()