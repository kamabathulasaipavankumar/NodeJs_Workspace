"use strict";
// http://localhoast:8080/login?username=admin&password=admin
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
// authorization
var auth = function (req, res, next) {
    var authHeader = req.headers;
    if (authHeader.token === "heySai") {
        next();
    }
    else {
        res.status(402).json({
            message: "unauthorized"
        });
    }
};
// authentication
app.get("/login", [auth], function (req, res) {
    if (req.query.username === "admin" && req.query.password === "admin") {
        res.status(200).json({
            message: "login success"
        });
    }
    else {
        res.status(401).json({
            message: "login failed"
        });
    }
});
app.get("/", function (req, res) {
    res.sendFile("C:/Users/admin/Desktop/Node.js/MERN_App/getparameters/index.html");
});
app.listen(8080, function () {
    console.log("server is running on port 8080");
});
