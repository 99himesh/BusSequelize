const {  where,Op } = require("sequelize");
const bus = require("../models/busModel");

const addBusses=async(req,res)=>{
   try {
     const {busName,busNumber,availableSeats}=req.body;
     const buses=await bus.create({busName,busNumber,availableSeats});
     res.status(201).send("Bus have been created")
   } catch (error) {
    console.log(error);
    res.status(500).send("Bus can not be created");
   }
}

const getBusses=async(req,res)=>{
    const {seats}=req.params;
    try {
     const buses=await bus.findAll({where:{
        availableSeats:{
            [Op.gt]:seats
        }
     }  
     });
     if(!buses){
        res.status(404).send("bus not found")
     }
     res.status(200).send({data:buses,message:"fetch bus successfully"})

  } catch (error) {
    res.status(500).send("Can not get busses")
    console.log(error);
    
  }
}



module.exports={
    addBusses,
    getBusses
}