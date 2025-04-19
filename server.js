"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var account_1 = require("./account");
var transactions_1 = require("./transactions");
var app = (0, express_1.default)();
app.use('/account', account_1.default);
app.use('/transactions', transactions_1.default);
app.listen((5000), function () {
    console.log("Server is running on port 5000");
});
