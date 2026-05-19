const userModel=require("./userModel.js");
const busModel=require("./busModel.js");
const department = require("./department.js");
const course = require("./coursesModel.js");
const courseUser = require("./courseUserModel.js");
//one to one 

userModel.hasOne(busModel);
busModel.belongsTo(userModel);


//one to many
department.hasMany(userModel);
userModel.belongsTo(department);


//many to many

course.belongsToMany(userModel, { through:  courseUser});
userModel.belongsToMany(course, { through: courseUser });


module.exports={
    userModel,
    busModel,
    courseUser,
    course,
    department
}