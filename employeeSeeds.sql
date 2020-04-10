DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db; 
USE employee_db; 

CREATE TABLE departments(
id INT AUTO_INCREMENT NOT NULL, 
department VARCHAR(30) NOT NULL, 
PRIMARY KEY(id)
); 

CREATE TABLE role(
id INT AUTO_INCREMENT NOT NULL, 
title VARCHAR(30) NOT NULL, 
salary DECIMAL NOT NULL, 
department_id INT NOT NULL, 
PRIMARY KEY(id)
); 

CREATE TABLE employee(
id INT AUTO_INCREMENT NOT NULL, 
first_name VARCHAR(30) NOT NULL, 
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL, 
PRIMARY KEY(id)
); 

INSERT INTO employee (first_name, last_name, role_id) VALUES ('Bert', 'Macklin', '1'); 
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Michael', 'Scarn', '2'); 
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Janet', 'Snakehole', '3'); 
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Jasmine', 'Windsong', '4'); 
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Golden', 'Face', '5'); 
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Johnny', 'Karate', '6'); 
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Jean-Ralphio', 'Saperstein', '7'); 




INSERT INTO departments (department) VALUES ('Legal'); 
INSERT INTO departments (department) VALUES ('Finance'); 
INSERT INTO departments (department) VALUES ('Engineering'); 
INSERT INTO departments (department) VALUES ('Sales');

INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', '200000', '1'); 
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', '200000', '1'); 
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', '250000', '3'); 
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', '150000', '2');
INSERT INTO role (title, salary, department_id) VALUES ('Sales Lead', '150000', '4');
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', '220000', '3');
INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', '120000', '4');

-- // Selects all employees: 
SELECT first_name, last_name, title, salary, department FROM employee
RIGHT JOIN role on employee.role_id = role.id
JOIN departments on role.department_id = departments.id
