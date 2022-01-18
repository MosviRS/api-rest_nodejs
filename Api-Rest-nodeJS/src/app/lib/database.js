const mysql= require('mysql');

const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
mysqlConnection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('data base conectada') 
    }
});
module.exports= mysqlConnection;