import express = require('express');

const cards = express.Router();

cards.get('/',(req,res)=>{res.status(200).json({message: "Hello from cards module"})})

export default cards;