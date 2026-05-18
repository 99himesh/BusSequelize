const user = require("../models/userModel.js");

const addUser=async(req,res)=>{
  try {
    const {name,email}=req.body;  
    const users=await user.create({
      name,email
    });
    res.status(201).send("User have been created");
  } catch (error) {
     console.log(error);
     res.status(500).send("User can not be created");
  }

}

const getUsers=async(req,res)=>{
    try {
        const users=await user.findAll();
        if(!users){
            res.status(404).send("User not  found");
        }
        res.status(200).send({success:true,data:users,message:"User fetch successfully"})
        
    } catch (error) {
      console.log(error);
      res.status(500).send("User can not get");
      
    }
}


module.exports={
    addUser,
    getUsers
}