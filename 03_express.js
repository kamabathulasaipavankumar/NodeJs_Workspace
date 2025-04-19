"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/ts_demo", function (req, res) {
    res.status(200).json({
        message: "Hello World from TypeScript with Express"
    });
});
app.listen(6000, function () {
    console.log("Server is running on port 6000");
});
