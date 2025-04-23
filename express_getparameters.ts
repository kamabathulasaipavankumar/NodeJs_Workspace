// http://localhost:5000/sample/uname/admin/upw/admin

// import * as express from 'express';

// const app:any = express();
// app.get('/sample/uname/:uname/upw/:upw', (req:any, res:any) => {
//    if(req.params.uname === 'admin' && req.params.upw === 'admin'){
//     res.status(200).json({
//         status: 'success',
//         message: 'Login successful',
//         data: {
//             uname: req.params.uname,
//             upw: req.params.upw
//         }
//     })
//    }else{
//     res.status(401).json({
//         status: 'error',
//         message: 'Login failed',
//     })
       
//    }
    
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });


// http://localhost:8080/login?uname=saipavan&upw=Sai123  

import express = require('express');

const app:any = express();

app.get('/login',(req:any,res:any):any=>{
  

    if(req.query.uname === "saipavan" && req.query.upw === "Sai123"){
        res.status(200).json({
            message: "Login successful",
            
            
        })

    }else{
        res.status(401).json({
            message:"hey sai Login failed! ",
        })
    }
})

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})