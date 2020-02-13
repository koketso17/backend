const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Application 

        router.post('/application', function(req, res){  
            var post = {
                

                "fullname": req.body.fullname, 
                "email": req.body.email,
                "mobileno": req.body.mobileno, 
                "specialization": req.body.specialization,
                "idno": req.body.idno, 
                "gender": req.body.gender, 
                "age": req.body.age, 
                "proglanguages":  req.body.proglanguages

        
            };
        
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
        
            var myQuery = "INSERT INTO applicantinfo SET ?";
            db.query(myQuery, [post], function(err, results, fields){
                if(err){
                    
                    res.send({
                        data : err,
                        code : 400,
                        message : "Account already exists!!!"
                    }); 
                }else{
                    var email = req.body.email
                    db.query('select * from applicantinfo where email = ?',email, function(err, results, fields){
                        
                 
                    return res.send(results)
                })
            }
            });
        
        })
module.exports = router;