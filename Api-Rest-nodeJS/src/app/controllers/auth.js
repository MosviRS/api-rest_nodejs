const mysqlConnection = require("../lib/database");
const mysqlOperations = require("../lib/db-operations");
const tables = require("../config/constants.js");
const authService = require("../services/auth.service"); 
const authController = {};
authController.signUp = async (req,res)=>{
    const {username,email,password,role} = req.body;
    const data = {
        username,
        email,
        password:await authService.encryptPassword(password)
    };
    console.log(data);
    const query = `
        CALL addUser(?,?,?);
    `;
    mysqlOperations.addItem(data,query,(err,rows)=>{
        if(!err){
            res.json({ status: "Usuario registrado" });
          }else{
              console.log(err);
          }
    });
};
authController.signIn= ()=>{

}

module.exports=authController;