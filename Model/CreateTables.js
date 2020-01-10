import pool from "./dbConnection";

const TableCreated = pool.query(
  `   
    DROP TABLE IF EXISTS employees;
    DROP TABLE IF EXISTS status;
    DROP TABLE IF EXISTS position;
    CREATE TABLE status(
      status_id BIGSERIAL PRIMARY KEY,
      status_name VARCHAR(200) NOT null
     );
     CREATE TABLE position(
      position_id BIGSERIAL PRIMARY KEY,
      position_name VARCHAR(200) NOT null
     );
        CREATE TABLE employees(
        empl_id BIGSERIAL PRIMARY KEY,
        nationalId VARCHAR(50) NOT null unique,
        phone VARCHAR(50) NOT null unique,
        email VARCHAR(150) NOT null unique,
        dob VARCHAR(20) NOT null, 
        position VARCHAR(200) NOT NULL,
        status boolean
    );
    INSERT INTO status(status_name)
      VALUES(
      'active'
      ),
      (
        'inactive'
      ) RETURNING *;
      INSERT INTO position(position_name)
      VALUES(
      'manager'
      ),
      (
        'developer'
      ),
      (
        'designer'
      ) RETURNING *;  
      INSERT INTO employees 
    (nationalId, phone, email, dob, position, status)
      VALUES(
      '1234567890123456',
      '0782214140',
      'patrickishimwe40@gmail.com',
      '04/09/1996',
      'developer',
      true
      ) RETURNING *;
    `
);
export { TableCreated as default };
