const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Udate profile
router.put('/update_profile',(req,res)=>{

    let student = req.body;
    var sql = "SET @id = ?;SET @first_name = ?;SET @last_name = ?;SET @id_no = ?;SET @phone_no = ?;SET @email = ?;SET @gender = ?;SET @specialization = ?;SET @cv_upload = ?;SET @referral = ?;SET @password = ?;\
    CALL update_profile(@id,@first_name,@last_name,@id_no,@phone_no,@email,@gender,@specialization,@cv_upload,@referral,@password);";

    db.query(sql,[student.id,student.first_name,student.last_name,student.id_no,student.phone_no,student.email,student.gender,student.specialization,student.cv_upload,student.referral,student.password],(err,rows,fields)=>{
        if(!err)
           res.send('Updated...');
        else
            console.log(err);
    })
    
});

module.exports = router ;