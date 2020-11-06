const { Router, response } = require("express");
const express = require("express");
const db = require("../models");
var router = express.Router(); 

router.get("/", function(req, res))