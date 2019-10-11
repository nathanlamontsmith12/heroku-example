const { User } = require('../db/sequelize');
const express = require("express");
const router = express.Router();

console.log("LOADING USER ROUTER"); 

router.get("/", (req, res)=>{
    console.log("USER MODEL: ")
    console.log(User);
    res.send("<h1>Hitting User Page!");
});



// requires: 
// username: STRING 
// optional: 
// is_admin: BOOLEAN 

router.post("/", async (req, res)=>{
    try {

        const newUser = {
            username: req.body.username,
            is_admin: (req.body.is_admin || false)
        };
        
        const createdUser = await User.create(newUser, {fields: ["username", "is_admin"]});

        res.json({code: 201, status: "OK", success: true, data: createdUser});
    } catch (err) {
        console.error(err); 
        res.json(err); 
    }
});

module.exports = router; 
