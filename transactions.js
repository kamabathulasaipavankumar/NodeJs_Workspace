"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var transactions = express_1.default.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({
        message: "transactions soon ....",
    });
});
exports.default = transactions;
