
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

        router.post('/send', function(req, res, next) {

            var newUser = new userInfo({
            "firstName" : req.body.firstName,
            "lastName" : req.body.lastName,
            "email" : req.body.email,
            "subj" : req.body.subj,
            "enquiry" : req.body.enquiry

            });
        
        newUser.save(function (err, user) {
            console.log("Came to the save method");
            if (err){
            console.log(user.email);
            res.send(err);
            return res;
            } 
            else{
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                user: 'kktsmodise7@gmail.com',
                pass: '#19961117mds'
                }
            });
        
            var mailOptions = {
                from: email,
                to: newUser.email,
                subject: subj,
                text: enquiry
            };
            console.log("This is the user email"+" "+newUser.email);
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log("Error while sending email"+" "+error);
                } else {
                console.log('Email sent: ' + info.response);
                }
        
            });
            console.log("success");
            return res.send("{success}");
            }
            });
        });

   module.exports = router;