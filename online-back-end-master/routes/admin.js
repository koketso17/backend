const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

router.post('/admin', function(req, res){  
    var post = {

        "first_name" : req.body.first_name,
        "last_name" : req.body.last_name,
        "username" : req.body.username,
        "email" : req.body.email,
        "log_date" : req.body.log_date,
        "contact" : req.body.contact
        

    };

    if(!post){
        res.send({
            code : 400,
            message : "FALSE"
        })
    }

    var myQuery = "INSERT INTO admin SET ?";
    db.query(myQuery, [post], function(err, results, fields){
        if(err){
            
            res.send({
                data : err,
                code : 400,
                message : "Account already exists!!!"
            }); 
        }else{
            
            console.log("results")
            res.send({
                data : results,
                code : 200,
                message : "Registered Successfully..."

            })
        }
    })
});



module.exports = router ;
