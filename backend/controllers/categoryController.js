const { Category } = require("../db/sequelize");
const express = require("express");
const router = express.Router(); 

console.log("LOADING CATEGORY ROUTER");

router.get("/", (req, res) => {
    console.log("CATEGORY MODEL: ")
    console.log(Category);
    res.send("<h1>Hit Category Page!</h1>")
}); 

module.exports = router; 
