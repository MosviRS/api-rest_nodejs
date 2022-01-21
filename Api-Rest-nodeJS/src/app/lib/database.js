const mysql= require('mysql');
const {DATABASE} = require('../config/constants');

const mysqlConnection = mysql.createConnection({
    host: DATABASE.host,
    user: DATABASE.user,
    password:DATABASE.password,
    database: DATABASE.name
});
mysqlConnection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('data base conectada');
    }
});
module.exports= mysqlConnection;