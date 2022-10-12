const { query } = require("../lib/database");
const mysqlConnection = require("../lib/database");
const mysqlOperations = {};
mysqlOperations.getList = (variables, setRes) => {
  mysqlConnection.query(
    `SELECT * FROM ${variables.table}`,
    (err, rows, fields) => {
      setRes(err, rows);
    }
  );
};
mysqlOperations.getItem = (data, variables, setRes) => {
  mysqlConnection.query(
    `SELECT * FROM ${variables.table} WHERE ${variables.field}`,
    [...Object.values(data)],
    (err, rows, fields) => {
      setRes(err, rows);
    }
  );
};
mysqlOperations.storeProcedure = (data,query,setRes) => {
  mysqlConnection.query(
    query,
    [...Object.values(data)],
    (err, rows, fields) => {
      setRes(err, rows);
    }
  );
}
mysqlOperations.addItem = (data, query, setRes) => {
  mysqlConnection.query(
    query,
    [...Object.values(data)],
    (err, rows, fields) => {
      setRes(err, rows);
    }
  );
};
mysqlOperations.updateItem = (data,query,setRes) =>{
  mysqlConnection.query(
    query,
    [...Object.values(data)],
    (err, rows, fields) => {
      setRes(err, rows);
    }
  );
}
mysqlOperations.deleteItem = (variables,id,setRes) => {
  mysqlConnection.query(
    `DELETE FROM ${variables.table} WHERE ${variables.field} = ?;`,
    [id],
    (err, rows, fields) => {
      setRes(err, rows);
    }
  );
};
module.exports = mysqlOperations;
