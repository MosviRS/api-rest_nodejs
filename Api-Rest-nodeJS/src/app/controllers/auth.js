const jwt = require('jsonwebtoken');
const mysqlConnection = require("../lib/database");
const mysqlOperations = require("../lib/db-operations");
const tables = require("../config/constants.js");
const authService = require("../services/auth.service"); 
const authController = {};
const {SECRET_KEY} = require("../config/constants");

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
    mysqlOperations.addItem(data,query,(err,rows)=>{});
    const token = jwt.sign({email,username},SECRET_KEY,{
        expiresIn: 86400 //24 horas
    });
    res.status(200).json({token});
};
authController.signIn= ()=>{

}

module.exports=authController;