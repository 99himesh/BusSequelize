const userModel=require("./userModel.js");
const busModel=require("./busModel.js");
const department = require("./department.js");
//one to one 

userModel.hasOne(busModel);
busModel.belongsTo(userModel);


//one to many
department.hasMany(userModel);
userModel.belongsTo(department);

module.exports={
    userModel,
    busModel
}