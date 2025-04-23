import express = require('express');
import accounts from './accounts';
import transactions from './transactions';
import cards from './cards';

const app = express();

app.use('/accounts', accounts);
app.use('/transactions', transactions);
app.use('/cards', cards);

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
    
})

// http://localhost:8080/accounts
// http://localhost:8080/accounts/login?name=admin&password=admin
// http://localhost:8080/transactions with token = "HeySai"
// http://localhost:8080/cards