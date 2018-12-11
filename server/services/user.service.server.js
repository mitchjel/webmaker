module.exports = function(app) {
    // import model
    const userModel = require("../models/user/user.model.server");
    const passport = require('passport');
    // import Strategies when users try to log in
    const LocalStrategy = require('passport-local').Strategy;
    // load the encryption library to encrypt passwords and
    // decrypt password when log in
    const bcrypt = require("bcrypt-nodejs");
    // Encapsulate cooky's infos
passport.serializeUser(serializeUser);

function serializeUser(user, done) {
   done(null, user);
 }
 // Decrypt cooky's infos
 passport.deserializeUser(deserializeUser);

function deserializeUser(user, done) {
   userModel.findUserById(user._id).then(
     function(user) {
       done(null, user);
     },
     function(err) {
       done(err, null);
     }
   );
 }
 // LocalStrategy checks if username and password are a match
 passport.use(new LocalStrategy(localStrategy));

 async function localStrategy(username, password, done) {
  const data = await userModel.findUserByUsername(username);
  if (data && bcrypt.compareSync(password, data.password)) {
    return done(null, data); //  if there is any data which means this user exists
  } else {
    return done(null, false); // if user does not exist send out false
  }
}
// Register function creation path
app.post('/api/register', register);
 // LoggedIn function creation path
 app.post("/api/loggedIn", loggedIn);
 // Login request must be authenticate before first 
 // If it is true then Login fucntion is run otherwise Login function does not run
 app.post('/api/login', passport.authenticate('local'), login);
       // different web services to handle different request (paths and fucntions)
       // CreateUser 
       app.post("/api/user", createUser);
       // Get UserByID
       app.get("/api/user/:uid", findUserById);
       // Combine findUserByUsername and findUserByCredentials
        // both have same path
       app.get("/api/user", findUser);
       // Update User
       app.put("/api/user", updateUser);
        // Logout function creation path
        app.post('/api/logout', logout);

        // Register user function implementation
        async function register(req, res) {
          var user = req.body;
          // Encrypt data before sending onto DB
          user.password = bcrypt.hashSync(user.password);
          // adding user to the  data base
          const data = await userModel.createUser(user);
          // log in that user infos onto that cookie and send it
          //back to the user
          req.login(data, function(err) {
            res.json(data);
          });
        }
       // Login Function just send out to user whether or not they
       // are allowed to log in
       function login(req, res) {
        const user = req.user;
        res.json(user);
    }
    // Function LoggedIn Implementation
    function loggedIn(req, res) {
      res.send(req.isAuthenticated() ? req.user : "0");
    }
// Function Logout Implementation
function logout(req, res) {
  req.logOut();
  res.send("Log out Successfully");
}

// CRUD functions for User
       async function createUser(req, res) {
            var user = req.body;
            const data = await userModel.createUser(user);
            res.json(data);
       }
        
         async  function findUserById(req, res) {
            const userId = req.params["uid"];
            const data = await userModel.findUserById(userId);
                     res.json(data);
          }
        
          async function findUser(req, res) {
            const username = req.query["username"];
            const password = req.query["password"];
            if (username && password) {
            const data = await userModel.findUserByCredentials(username, password);
                      res.json(data);
              return;
            }
        
            if (username) {
              const data = await userModel.findUserByUsername(username);
                        res.json(data);
              return;
            }
          }
        
          async function updateUser(req, res) {
            const user = req.body;
            const uid = user._id;
          const data = await userModel.updateUser(uid, user);
                res.json(data);
          }
        };