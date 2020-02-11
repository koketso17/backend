const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//register student 

        router.post('/register', function(req, res){  
            var post = {
        
                "first_name" : req.body.first_name,
                "last_name" : req.body.last_name,
                "id_no" : req.body.id_no,
                "phone_no" : req.body.phone_no,
                "email" : req.body.email,
                "gender" : req.body.gender,
                "specialization" : req.body.specialization,
                "cv_upload" : req.body.cv_upload,
                "referral" : req.body.referral,
                "password" : req.body.password

        
            };
        
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
        
            var myQuery = "INSERT INTO register SET ?";
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


module.exports = router;