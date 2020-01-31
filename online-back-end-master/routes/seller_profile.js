const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn')

router.get('/seller_profile', function(req, res){

    const username = req.body.username;

    var myQuery = "SELECT * FROM reg_seller WHERE username = ?";
    

    db.query (myQuery, [username], function(err, results){
        if(err){
            
            res.send({
                code : 400,
                message : err
            })
        }else{
            
            console.log("results")
            res.send({
                data : results,
                code : 200,
                message : "Successful..."

            })
         }
    })
});

module.exports = router ;