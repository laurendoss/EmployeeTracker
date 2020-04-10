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
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                
            ]
        }
      ]).then(function(answers){
          
          if (answers.Action === "View All Employees"){
              ViewAllEmployees(); 

          } else if (answers.Action === "View All Employees by Department"){
              ViewByDepartment(); 

          }  else if (answers.Action === "Add Employee"){
              AddEmployee(); 

          } else if (answers.Action === "Remove Employee"){
              RemoveEmployee(); 

          } else if (answers.Action === "Update Employee Role"){
              UpdateEmployeeRole(); 

          }
          //We now have the user's action choice. 
          //Based on that choice, present them with new Questions
      })
  }
  promptUser()

  function ViewAllEmployees() {
    var query = "SELECT first_name, last_name, title, salary, department FROM employee RIGHT JOIN role on employee.role_id = role.id JOIN departments on role.department_id = departments.id";
    connection.query(query, function(err, res) {
      if (err) throw err;
    
        console.table(res); 
    
      
    });
  }

  