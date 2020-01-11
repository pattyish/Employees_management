import pool from "./dbConnection";

class Dboperations {
  constructor(tableName) {
    this.tableName = tableName;
  }
  async selectByField(field, params, operator = "=") {
    const query = {
      text: `SELECT * FROM ${this.tableName} WHERE ${field} ${operator} $1`,
      values: [params]
    };
    try {
      const results = await pool.query(query);
      const row = results.rows;
      const count = results.rowCount;
      return {
        row,
        count
      };
    } catch (error) {
      console.log(`error on select ${error}`);
    }
  }
  async insertData(data) {
    const params = [];
    const chunks = [];
    const values = [];
    const keys = [];
    Object.keys(data).forEach(key => {
      keys.push(key);
      params.push(data[key]);
      values.push(`$${params.length}`);
    });
    chunks.push(`(${values.join(", ")})`);
    try {
      const insertQuery = {
        text: `INSERT INTO ${this.tableName} (${keys.join(
          ","
        )}) VALUES ${chunks.join(",")} RETURNING *`,
        values: params
      };
      const results = await pool.query(insertQuery);
      return results.rows[0];
    } catch (err) {
      console.log(`error on insert ${err}`);
    }
  }
  async editData(id, data) {
    const params = [id];
    Object.keys(data).forEach(key => {
      params.push(data[key]);
    });
    try {
      const updateQuery = {
        text: `UPDATE ${this.tableName} SET empl_name = $2, nationalId = $3, phone = $4, email = $5, dob = $6, position = $7, status = $8 WHERE empl_id = $1  RETURNING *`,
        values: params
      };
      const results = await pool.query(updateQuery);
      return results.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
  async deleteEmployee(id) {
    try {
      const deleteQuery = {
        text: `DELETE FROM ${this.tableName} WHERE empl_id = $1 RETURNING *`,
        values: [id]
      };
      const results = pool.query(deleteQuery);
      return {
        deleted: results.rows,
        count: results.rowCount
      };
    } catch (error) {
      console.log(error);
    }
  }
  async activateEmployee(params) {
    try {
      const activateQuery = {
        text: `UPDATE ${this.tableName} SET status = 1  WHERE empl_id = $1 RETURNING *`,
        values: params
      };
      const results = pool.query(activateQuery);
      return results.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
  async suspendEmployee(data) {
    try {
      Object.keys(data).forEach(key => {
        params.push(data[key]);
      });
      console.log(params);
      const suspengQuery = {
        text: `UPDATE ${this.tableName} SET status = $1 WHERE empl_id = $2 RETURNING *`,
        values: params
      };
      const results = pool.query(suspengQuery);
      return results.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
}

export { Dboperations as default };
