console.log("Account route loaded");

import express from 'express';

const account = express.Router();

account.get('/',(req, res)=>{
    res.status(200).json({
        message: "account soon ....",
    })
})


export default account