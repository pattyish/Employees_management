# Employees_management
project for employees managements

# Features
- Manager can sign up 
- Manager can login by providing email and password
# Authenticated Features 
only manager should be able to perform this feature
- Manager can create new employee and email sent to employee
- Manager can edit employee record
- Manager can delete employeee
- Manager can activate employee
- Manager can suspend employee
- Manager can search employee by name
- Manager can search employee by phone
- Manager can search employee by email
- Manager can search employee by position
- Manager can get employees list
- Manager can create multple employee by uploading excel file


## Getting Started
To get started with this app you have to follow all instruction below carefully and implement.

## Prerequisites
First all of, Install the softwares on your local machine
- Install `NodeJS` [NodeJs](https://nodejs.org/en/download/)
- Install `Git` [Git](https://git-scm.com/)

## Installing the App
Make sure that you have cloned this Repo to your local machine
- By running `git clone`
- or download the Ziped folder on `GitHub`
- Then after run `cd Employees_management` to open the folder or simplly double on the downloaded folder
- To install all dependencies locally run this command `npm i` or `npm install` in terminal

### Scripts to use
- run `npm start` to start server
-  run `npm run createTables` to create tables

## API endpoints

**API endpoints with no authentication**
- POST `employee_management/api/employees/` manager create employee.
- PUT `/employee_management/api/employees/:employeeid` manage edit employee inforomation.
- PUT `/employee_management/api/employees/:employeeid/activate` manage activate employee.
- PUT `/employee_management/api/employees/:employeeid/suspend` manage deactivate employee.
- DELETE `employee_management/api/employees/:employeeid` manage delete employee.


- POST `employee_management/api/employees/search/name` search employee based on name.
- POST `employee_management/api/employees/search/email` search employee based on email.
- POST `employee_management/api/employees/search/phone` search employee based on phone.
- POST `employee_management/api/employees/search/position` search employee based on position.
- POST `employee_management/api/employees/employeelist` search employee based on position.
- GET `employee_management/api/employees/` search employee based on position.


## Tools Used

### Back End
* Node JS
* Express (Framework)

## DOCUMENTATION
  link: [API documentation with POSTMAN](https://documenter.getpostman.com/view/8851862/SWLiZ5sX)


## Author
- ISHIMWE Patrick <patrickishimwe16@gmail.com>
