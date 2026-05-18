const express=require("express");
const db=require("./utils/database.js")
const userRoute=require("./routes/userRoute.js")
const busRoute=require("./routes/busRoute.js")
const app=express();


app.use(express.json());


app.use("/users",userRoute)
app.use("/bus",busRoute)

 db.sync().then(()=>{
    app.listen(3000,(err)=>{
        console.log("Server is running");
        
    })
    }).catch((err)=>{
            console.log(err);
            
})