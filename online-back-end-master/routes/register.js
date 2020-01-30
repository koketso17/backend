const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

router.post('/register', function(req, res){  
    var post = {

        "first_name" : req.body.first_name,
        "last_name" : req.body.last_name,
        "username" : req.body.username,
        "email" : req.body.email,
        "contact" : req.body.contact,
        "password" : req.body.password,
        "confirm_password" : req.body.confirm_password

    };

    if(!post){
        res.send({
            code : 400,
            message : "FALSE"
        })
    }

    var myQuery = "INSERT INTO accounts SET ?";
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
})



module.exports = router ;
