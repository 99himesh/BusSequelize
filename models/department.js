const {Sequelize,DataTypes}=require("sequelize");
const sequelize=require("../utils/database.js")


const department=sequelize.define(
    'department',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
       deprtmentName:{
        type:DataTypes.STRING,
         allowNull:false
       }
    }

)


module.exports=department;