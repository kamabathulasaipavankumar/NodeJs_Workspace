// http://localhoast:8080/login?username=admin&password=admin

import express = require ("express");

const app = express();


// authorization

let  auth = (req:any,res:any,next:any):any=>{
    let authHeader = req.headers;
    if(authHeader.token === "heySai"){
        next();
    }else{
        res.status(402).json({
            message: "unauthorized"
        })
    }

}

// authentication

app.get("/login" ,[auth],(req:any,res:any):any=>{

    if(req.query.username === "admin" && req.query.password === "admin"){
        res.status(200).json({
            message: "login success"
        })
    }else{
        res.status(401).json({
            message: "login failed"
        })
    }
})


// default route
// http://localhost:8080/

app.get("/",(req,res)=>{
    res.sendFile("C:/Users/admin/Desktop/Node.js/MERN_App/getparameters/index.html")

})

app.listen(8080,()=>{
    console.log("server is running on port 8080")
    
})