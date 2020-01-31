const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');


router.post('/order_product', function(req, res){  
    var post = { 

        "prod_name" : req.body.prod_name,
        "quantity" : req.body.quantity,
        "price" : req.body.price,
        "order_date" : req.body.order_date

    };

    if(!post){
        res.send({
            code : 400,
            message : "FALSE"
        })
    }

    var myQuery = "INSERT INTO order_product SET ?";
    db.query(myQuery, [post], function(err, results, fields){
        if(err){
            
            res.send({
                data : err,
                code : 400,
                message : "Cannot Add into Order!!!"
            }); 
        }else{
            
            console.log("results")
            res.send({
                data : results,
                code : 200,
                message : "Added Successfully..."

            })
        }
    })
});



module.exports = router ;
