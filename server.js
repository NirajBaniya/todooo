const express = require('express');
const http = require ('http')
require('dotenv').config()
console.log(process.env)
var port = process.env.PORT
const app = express()
const router = require('./routes')
app.use('/',(req,res)=>{
    res.json({message:"Home Page"})
})
const server = http.createServer(app)


server.listen(port,()=>{
    console.log("App running in localhost:" +port);
})