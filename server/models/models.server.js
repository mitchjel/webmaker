// create a local host connection with port 27017
var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; 

// check if running remotely
if(process.env.MLAB_USERNAME_WEBDEV) { 

  var username = process.env.MLAB_USERNAME_WEBDEV; 
  // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds119304.mlab.com:19304/heroku_r7bkd0l0';  
}
// import mongoose library
var mongoose = require("mongoose");
// Connect mongoose with the database
var db = mongoose.connect(connectionString,  
    {useNewUrlParser: true}
    );
// // export the connection 
module.exports = db;