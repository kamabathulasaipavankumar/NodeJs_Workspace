"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cards = express.Router();
cards.get('/', function (req, res) { res.status(200).json({ message: "Hello from cards module" }); });
exports.default = cards;
