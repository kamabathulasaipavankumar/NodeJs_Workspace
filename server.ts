import express from 'express';
import account from './account';
import transactions from './transactions';

const app = express();

app.use('/account', account);
app.use('/transactions', transactions);

// Add a health check or default route to keep server alive
app.get('/', (req, res) => {
    res.send('Server is alive');
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
