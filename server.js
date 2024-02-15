const express = ('express');
const http = require ('http')

const app = express()
app.use('/',(req,res)=>{
    res.json({message:"Home Page"})
})
const server = http.createServer(app)
server.listen(5000,()=>{
    console.log("App running in localhost http://localhost:5000");
})