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
      console.log(keys.join(","));
      console.log(params);
      console.log(values);
      console.log(chunks.join(","));
      const results = await pool.query(insertQuery);
      return results.rows;
    } catch (err) {
      console.log(`error on insert ${err}`);
    }
  }
}

export { Dboperations as default };
