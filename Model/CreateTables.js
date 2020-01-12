import pool from "./dbConnection";

const TableCreated = pool.query(
  `   
    DROP TABLE IF EXISTS employees;
        CREATE TABLE employees(
        empl_id BIGSERIAL PRIMARY KEY,
        empl_name VARCHAR(200) NOT null,
        nationalId VARCHAR(50) NOT null unique,
        phone VARCHAR(50) NOT null unique,
        email VARCHAR(150) NOT null unique,
        dob VARCHAR(20) NOT null, 
        position VARCHAR(150) NOT null ,
        status VARCHAR(30) NOT null
    );
      INSERT INTO employees 
    (empl_name, nationalId, phone, email, dob, position, status)
      VALUES(
      'patrick', 
      '1234567890123456',
      '0782214140',
      'patrickishimwe40@gmail.com',
      '04/09/1996',
      '1',
      '2'
      ) RETURNING *;
    `
);
export { TableCreated as default };
