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


//Function to view all employees
function ViewAllEmployees() {
  var query = "SELECT first_name, last_name, title, salary, department FROM employee RIGHT JOIN role on employee.role_id = role.id JOIN departments on role.department_id = departments.id";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    
    OtherAction();
  });


}
//Function to filter employee view by department
function ViewByDepartment() {
  inquirer.prompt([
    {
      type: "list",
      name: "Action",
      message: "Which Department Employees Would You Like to View?",
      choices: [
        "Legal",
        "Finance",
        "Engineering",
        "Sales",


      ]
    }
  ]).then(answers => {

    var query = `SELECT first_name, last_name, title, salary, department FROM employee
    RIGHT JOIN role on employee.role_id = role.id
    JOIN departments on role.department_id = departments.id WHERE department = "${answers.Action}"`;
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      OtherAction();
    })
  });
  // OtherAction(); 

}
function AddEmployee() {
  inquirer.prompt([
    {
      type: "list",
      name: "EmployeeFirstName",
      message: "What is the Employee's First Name?",
     

    },
    {
      type: "input",
      name: "EmployeeLastName",
      message: "What is the Employee's Last Name?",

    },
    {
      type: "input",
      name: "EmployeeTitle",
      message: "What is the Employee's Job Title?",

    },
    {
      type: "input",
      name: "EmployeeSalary",
      message: "What is the Employee's Salary?",

    },
    {
      type: "input",
      name: "EmployeeDepartment",
      message: "What is the Employee's Department?",

    },
    {
      type: "input",
      name: "EmployeeDepartmentCode",
      message: "What is the Employee's Department Code?(1-Legal,2-Finance,3-Engineering,4-Sales)",

    }
  ]).then(answers => {


    if (answers.EmployeeTitle === answers.EmployeeTitle || answers.EmployeeSalary === answers.EmployeeSalary) {
      connection.query(
        query = "INSERT INTO role SET ?",
        {
          title: answers.EmployeeTitle,
          salary: answers.EmployeeSalary,
          department_id: answers.EmployeeDepartmentCode,

        }, function (err) {
          if (err) throw err;
          console.log("Your role was successfully added to list!");
          // re-prompt the user for if they want to bid or post

        }
      )

    } if (answers.EmployeeFirstName == answers.EmployeeFirstName || answers.EmployeeLastName == answers.EmployeeLastName) {

      var sql = `INSERT INTO employee (first_name, last_name) VALUES ('${answers.EmployeeFirstName}', '${answers.EmployeeLastName}')`
      connection.query(sql, function (err, res) {

        if (err) throw err;
      });

    }
    if (answers.EmployeeDepartment === answers.EmployeeDepartment) {
      connection.query(
        query = "INSERT INTO departments SET ?",
        {
          department: answers.EmployeeDepartment

        }, function (err) {
          if (err) throw err;
          console.log("Your department was successfully added to list!");


          connection.query(
            query = "UPDATE employee SET role_id = id WHERE role_id IS NULL AND id is NOT NULL;", function (err, res) {
              if (err) throw err;
              OtherAction();
            }

          )
        }
      )

    }
  })
};


//Function to prompt user with the opportunity to perform another action
function OtherAction() {
  inquirer.prompt([
    {
      type: "list",
      name: "Action",
      message: "Would you like to perform another action?",
      choices: [
        "Yes",
        "No",

      ]
    }
  ]).then(answers => {
    if (answers.Action === "Yes") {
      promptUser();
    } else if (answers.Action === "No") {
      connection.end();
    }

  })
}
// Function to update Employee Role
function UpdateEmployeeRole(){
  var arr = []; 
  var sql = "SELECT * FROM employee"
  connection.query(sql, function(err,res){
    if (err) throw err; 
    arr.push(res)
    
  })
  console.log(arr)
  // inquirer.prompt([
  //   {
  //     type: "input", 
  //     name: "UpdateRoleFN", 
  //     message: "What is the First Name of the Employee Who's Role You Would Like to Modify?"

  //   }, 
  //   {
  //     type: "input", 
  //     name: "UpdateRoleLN",
  //     message: "What is the Last Name of the Employee Who's Role You Would Like to Modify?"
  //   },
  //   {
  //     type: "input", 
  //     name: "NewRole", 
  //     message: "What would you like their new role to be?"
  //   }
  // ]).then(answers => {

  // })

}
function promptUser() {
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
        "Update Employee Role",

      ]
    }
  ]).then(function (answers) {

    if (answers.Action === "View All Employees") {
      ViewAllEmployees();

    } else if (answers.Action === "View All Employees By Department") {
      ViewByDepartment();

    } else if (answers.Action === "Add Employee") {
      AddEmployee();

    } else if (answers.Action === "Update Employee Role") {
      UpdateEmployeeRole();

    }
    //We now have the user's action choice. 
    //Based on that choice, present them with new Questions
  })
}
promptUser();
