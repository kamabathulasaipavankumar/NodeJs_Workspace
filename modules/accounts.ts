import express = require('express');

const accounts = express.Router();

accounts.get('/',(req,res)=>{
    res.status(200).json({
        message: "Hello from accounts module"
    })
})


accounts.get('/login',(req,res)=>{
    if(req.query.name === "admin" && req.query.password === "admin"){
        res.status(200).json({
            message: "login success"
        })
    }else{
        res.status(401).json({
            message: "login failed"
        })
    }
})

export default accounts;