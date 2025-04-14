// Express
// express is a web framework and 3rd party libarry for node.js
// express it used to build web applications and REST APIs like GET, POST, PUT, DELETE 
// express module is we will download and install using yarn or npm
// ex: npm install express --save
// ex: yarn add express --save

const express = require("express");

const app = express();

app.get("/demo",(req,res)=>{
    res.status(200).json({
        message: "Welcome to express server",
        status: true
    })
})

app.post("/demo",(req,res)=>{
    res.status(200).json({
        message: "Welcome to express server"
    })
})

app.listen((5000),()=>{
    console.log("server is running on port 5000")
});