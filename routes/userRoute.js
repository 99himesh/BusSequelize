const express=require("express");
const router=express.Router();
const userRoute=require("../controllers/userController.js")

router.post("/add",userRoute.addUser)
router.get("/getUser",userRoute.getUsers)
router.delete("/deleteUser/:id",userRoute.deleteUsers)
router.post("/addValueToUser",userRoute.addingValueUSerAndBus)
router.post("/addValueToUserInDepartment",userRoute.addingValueUSerAndDepartment)



module.exports=router;