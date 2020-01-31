const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Udate an buyer
router.put('/update_seller_profile',(req,res)=>{

    let seller = req.body;
    var sql = "SET @id = ?;SET @first_name = ?;SET @last_name = ?;SET @username = ?;SET @email = ?;SET @contact = ?;SET @address = ?;SET @delivery = ?;SET @password = ?;\
    CALL SellerAddorEdit(@id,@first_name,@last_name,@username,@email,@contact,@address,@delivery,@password);";

    db.query(sql,[seller.id,seller.first_name,seller.last_name,seller.username,seller.email,seller.contact,seller.address,seller.delivery,seller.password],(err,rows,fields)=>{
        if(!err)
           res.send('Updated...');
        else
            console.log(err);
    })
    
});

module.exports = router;