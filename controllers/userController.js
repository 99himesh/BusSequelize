const { where } = require("sequelize");
const user = require("../models/userModel.js");
const bus = require("../models/busModel.js");
const department = require("../models/department.js");

const addUser=async(req,res)=>{
  try {
    const {name,phoneNumber,email}=req.body;  
    const users=await user.create({
      name,phoneNumber,email
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
const deleteUsers=async(req,res)=>{
  const {id}=req.params;
    try {
        const users=await user.destroy({
        where:{
            id:id
          }
        } 
        );
        if(!users){
            res.status(404).send("User not  found");
        }
        res.status(200).send({success:true,message:"User delete successfully"})
        
    } catch (error) {
      console.log(error);
      res.status(500).send("User can not deleted");
      
    }
}
const addingValueUSerAndBus=async(req,res)=>{
   try {
    const users=await user.create({...req.body.user})
    const buses=await bus.create({...req.body.bus,userId:users.id});
    return res.status(200).json({users,buses})
     } catch (error) {
      console.log(error);
      
     res.status(500).send("error while creating");
   }
}

const addingValueUSerAndDepartment=async(req,res)=>{
   try {
    const departments=await department.create({...req.body.department})
    const users=await user.create({...req.body.user,departmentId:departments.id});
    return res.status(200).json({users,department})
     } catch (error) {
      console.log(error);
      
     res.status(500).send("error while creating");
   }
}




module.exports={
    addUser,
    getUsers,
    deleteUsers,
    addingValueUSerAndBus,
    addingValueUSerAndDepartment
}