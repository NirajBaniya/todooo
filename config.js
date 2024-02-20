const mysql = require('mysql')

 var connection = mysql.createConnection(
    {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB_NAME

})

connection.connect(
    (err)=>{
        if(err)
        {
            throw err;
        }
        else{
            console.log("connected sucessfully");
        }
    }

)
module.exports = connection;