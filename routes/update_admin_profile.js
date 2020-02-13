const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Udate profile
router.put('/update_admin_profile',(req,res)=>{   

    let student = req.body;
    var sql = "SET @id = ?;SET @first_name = ?;SET @last_name = ?;SET @username = ?;SET @phone_no = ?;SET @email = ?;SET @password = ?;\
    CALL update_admin(@id,@first_name,@last_name,@username,@phone_no,@email,@password);";

    db.query(sql,[student.id,student.first_name,student.last_name,student.username,student.phone_no,student.email,student.password],(err,rows,fields)=>{
        if(!err)
           res.send('Updated...');
        else
            console.log(err);
    })
    
});
module.exports = router ;