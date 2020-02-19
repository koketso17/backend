
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

//get student profile

router.get('/admin_profile', function(req, res){

    const username = req.body.username;

    var myQuery = "SELECT * FROM admin_reg WHERE username = ?";
    

    db.query (myQuery, [username], function(err, results){
        if(err){
            
            res.send({
                code : 400,
                message : err
            })
        }else{
            
            
            res.send({results

            })
         }
    })
});

module.exports = router ;