const express=require("express");
const router=express.Router();
const busController=require("../controllers/busController.js")

router.post("/add",busController.addBusses)
router.get("/getBus/:seats",busController.getBusses)


module.exports=router;