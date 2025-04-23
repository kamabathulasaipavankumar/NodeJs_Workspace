"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// post server
var express = require("express");
// import bodyParser = require('body-parser');
var app = express();
// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));
// authorization middleware
var auth = function (req, res, next) {
    var authHeader = req.headers;
    if (authHeader.token === "heySai") {
        next();
    }
    else {
        res.status(401).json({
            auth: false,
            message: "Unauthorized"
        });
    }
};
// authentication middleware
app.post("/login", [auth], function (req, res) {
    if (req.body.name === "sai" && req.body.age === 25) {
        res.status(200).json({
            message: "Hello Sai"
        });
    }
    else {
        res.status(401).json({
            message: "failed"
        });
    }
});
app.listen(8080, function () {
    console.log("Server is running on port 8080");
});
