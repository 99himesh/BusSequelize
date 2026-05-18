const {Sequelize,DataTypes}=require("sequelize");
const sequelize=require("../utils/database.js")


const bus=sequelize.define(
    'bus',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        busName:{
          type:DataTypes.STRING,
          allowNull:false  
        },
        busNumber:{
          type:DataTypes.INTEGER,
          allowNull:false  
        },
        availableSeats:{
          type:DataTypes.INTEGER,
          allowNull:false  
        },
    }

)


module.exports=bus;