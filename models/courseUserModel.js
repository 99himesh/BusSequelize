const {Sequelize,DataTypes}=require("sequelize");
const sequelize=require("../utils/database.js")


const courseUser=sequelize.define(
    'courseUser',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }
    }

)


module.exports=courseUser;