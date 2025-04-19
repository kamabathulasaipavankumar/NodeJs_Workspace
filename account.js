"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var account = express_1.default.Router();
account.get('/', function (req, res) {
    res.status(200).json({
        message: "account soon ....",
    });
});
account.get('/balance', function (req, res) {
    res.status(200).json({
        balance: 1000,
    });
});
exports.default = account;
