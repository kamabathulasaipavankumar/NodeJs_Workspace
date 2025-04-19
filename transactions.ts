console.log("Transactions route loaded");


import express from 'express';

const transactions = express.Router();

transactions.get("/",(req,res)=>{
    res.status(200).json({
        message:"transactions soon ....",
    })

})

export default transactions;