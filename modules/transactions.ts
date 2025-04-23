import express = require('express');

const transactions = express.Router();

const auth = (req:any,res:any,next:any):any=>{
    const authHeader = req.headers;
    if(authHeader.token === "HeySai"){
        next();
    
    }else{
        res.status(401).json({message: "unauthorized"})
    }
}



transactions.get("/",[auth],(req:any,res:any)=>{
    res.status(200).json({
        message: "Hello from transactions module"
    })
  
})

export default transactions;