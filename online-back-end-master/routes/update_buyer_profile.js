const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Udate an buyer
router.put('/update_buyer_profile',(req,res)=>{

    let buyer = req.body;
    var sql = "SET @id = ?;SET @first_name = ?;SET @last_name = ?;SET @username = ?;SET @email = ?;SET @contact = ?;SET @address = ?;SET @password = ?;\
    CALL BuyerAddorEdit(@id,@first_name,@last_name,@username,@email,@contact,@address,@password);";

    db.query(sql,[buyer.id,buyer.first_name,buyer.last_name,buyer.username,buyer.email,buyer.contact,buyer.address,buyer.password],(err,rows,fields)=>{
        if(!err)
           res.send('Updated...');
        else
            console.log(err);
    })
    
});

module.exports = router ;