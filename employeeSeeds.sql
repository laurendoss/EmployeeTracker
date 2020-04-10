DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db; 
USE employee_db; 

CREATE TABLE department(
id INT AUTO_INCREMENT NOT NULL, 
name VARCHAR(30) NOT NULL, 
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
manager_id INT, 
PRIMARY KEY(id)
); 

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bert', 'Macklin', 'Lawyer', '1' ); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Scarn', 'Lawyer', '1' ); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Janet', 'Snakehole', 'Lead Engineer', '3' ); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jasmine', 'Windsong', 'Accountant', '2' ); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Golden', 'Face', 'Sales Lead', '4' ); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Johnny', 'Karate', 'Software Engineer', '3' ); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Scarn', 'Salesperson', '4' ); 

INSERT INTO role (title, salary, department_id) VALUES ()


INSERT INTO department (name) VALUES ('Legal'); 
INSERT INTO department (name) VALUES ('Finance'); 
INSERT INTO department (name) VALUES ('Engineering'); 
INSERT INTO department (name) VALUES ('Sales')

INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', '200000', '3'); 
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', '200000', '3'); 