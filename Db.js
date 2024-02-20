const mySqual = require('./config')

const checkPhone = (phone,callback)=>{
    mySqual.query(`select * from user where phone = ?`,{phone},callback);
} 