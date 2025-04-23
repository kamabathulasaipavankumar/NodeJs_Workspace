"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get('/', function (req, res) {
    res.status(200).json({
        message: "Hello from accounts module"
    });
});
accounts.get('/login', function (req, res) {
    if (req.query.name === "admin" && req.query.password === "admin") {
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
exports.default = accounts;
