"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router();
var auth = function (req, res, next) {
    var authHeader = req.headers;
    if (authHeader.token === "HeySai") {
        next();
    }
    else {
        res.status(401).json({ message: "unauthorized" });
    }
};
transactions.get("/", [auth], function (req, res) {
    res.status(200).json({
        message: "Hello from transactions module"
    });
});
exports.default = transactions;
