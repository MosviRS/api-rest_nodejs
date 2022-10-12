const mysqlConnection = require("../lib/database");
const mysqlOperations = require("../lib/db-operations");
const tables = require("../config/constants.js"); 
const cursoController = {};

cursoController.list = (req, res) => {
  const variables ={
    table:tables.cursos,
    field:'cursosID'
  };
  mysqlOperations.getList({table:tables.cursos},(err, rows)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
  });
};
cursoController.item = (req,res) => {
  const { id } = req.params;
    mysqlOperations.getItem(
        [id],
        {table:tables.cursos,field:' cursosID = ? '},
        (err,rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        }
    );
};
cursoController.add = (req, res) => {
  const data = req.body;
  const query = `
  CALL cursoAddEdit(?,?,?,?,?);
`;
  mysqlOperations.addItem(data,query,(err,rows)=>{
        if(!err){
          res.json({ status: "Curso Guardado" });
        }else{
            console.log(err);
        }
  });
};
cursoController.update = (req, res) => {
  const data = req.body;
  const {id} = req.params;
  const query = `
  CALL cursoAddEdit(?,?,?,?,?);
`;
  mysqlOperations.updateItem(data,query,(err,rows)=>{
        if(!err){
          res.json({ status: "Curso Actualizado" });
        }else{
            console.log(err);
        }
  });
};
cursoController.delete = (req, res) => {
  const { id } = req.params;
  const variables ={
      table:tables.cursos,
      field:'cursosID'
  };
  mysqlOperations.deleteItem(variables,id,(err,rows)=>{
    if (!err) {
      res.json({ status: "Curso Eliminado" });
    } else {
      console.log(err);
    }
  });
};
module.exports = cursoController;
