const mysql = require('mysql');
const express = require('express');
const app = express();
var cors = require('cors')
const mysqlConn= require('./conn/conn');
const bodyParser = require('body-parser');
const jwt = require('jasonwebtoken');

app.use(bodyParser.json());
app.use(cors())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
// api routes

 app.use('/', require('./routes/register'));
 app.use('/', require('./routes/student_profile'));
 app.use('/', require('./routes/update_profile'));

 //Mock user

 app.post('/api/login', (req, res) => {

  const user = {
    id = 1,
    email = "testme@gmail.com"
  }

    jwt.sign({user}, 'secretkey', { expressIN: '30S'}, (err, token) => {

      res.json({
          token
      });
    });
 });

 // FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
