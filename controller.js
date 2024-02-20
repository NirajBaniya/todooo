const homePage = (req,res)=>{
    res.status(200).json({message:"Home Page"})
}


const userRegister = (req, res)=>{
    var data = req.body;
    res.status(200).json({message:"User Register"})
    console.log(data);
    checkPhone(data.phone,(err,result)=>{
        if(err){
            res.status(500).json({message:"Server Error!"})
        }
        else{
            if(result.length == 0){
             
            }
            else{
                res.status(200).json({message:"Phone taken"})
            }
        }
    })
}
 
const userLogin = (req,res)=>{}


module.exports = {
    homePage:homePage,
    userRegister:userRegister,
    userLogin:userLogin
}