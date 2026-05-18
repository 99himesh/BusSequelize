const express=require("express");
const router=express.Router();
const userRoute=require("../controllers/userController.js")

router.post("/add",userRoute.addUser)
router.get("/getUser",userRoute.getUsers)



module.exports=router;