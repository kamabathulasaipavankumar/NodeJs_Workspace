// post server
import express = require('express');
// import bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON data
app.use(express.json());
//app.use(bodyParser.json())

// Middleware to parse URL-encoded data
app.use(express.urlencoded({extended: false}))
//app.use(bodyParser.urlencoded({extended:false}))

// authorization middleware
let auth = (req:any,res:any,next:any):any=>{
    let authHeader =req.headers;
   
    if(authHeader.token === "heySai"){
        next()
    }else{
        res.status(401).json({
            auth: false,
            message: "Unauthorized"
        })
    }
}

// authentication middleware
app.post("/login",[auth],(req:any,res:any):any=>{
    if(req.body.name === "sai" && req.body.age === 25){
        res.status(200).json({
            message: "Hello Sai"
        })
    }else{
        res.status(401).json({
            message: "failed"
        })
    }

})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
    
})