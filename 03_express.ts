// fist npx tsc --init
// then npx tsc --watch
// then node dist/03_express.js
// then open browser and go to http://localhost:6000/ts_demo
// then open browser and go to http://localhost:6000/ts_demo_user

import express from 'express';

const app = express();

app.get("/ts_demo", (req, res) => {
    res.status(200).json({
        message: "Hello World from TypeScript with Express"
    });
});

app.listen(6000, () => {
    console.log("Server is running on port 6000");
});
