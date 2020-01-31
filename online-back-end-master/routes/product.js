const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

router.post('/product', function(req, res){  
    var post = {

        "prod_name" : req.body.prod_name,
        "prod_desc" : req.body.prod_desc,
        "quantity" : req.body.quantity,
        "price" : req.body.price

    };

    if(!post){
        res.send({
            code : 400,
            message : "FALSE"
        })
    }

    var myQuery = "INSERT INTO product SET ?";
    db.query(myQuery, [post], function(err, results, fields){
        if(err){
            
            res.send({
                code : 400,
                message : err
            }); 
        }else{
            
            console.log("results")
            res.send({
                data : results,
                code : 200,
                message : "Successful..."

            })
        }
    })
})



module.exports = router ;
