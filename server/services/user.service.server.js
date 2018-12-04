module.exports = function(app) {
    // import model
    const userModel = require("../models/user/user.model.server")
       // different web services to handle different request (paths and fucntions)
       // CreateUser 
       app.post("/api/user",createUser);
       // Get UserByID
       app.get("/api/user/:uid", findUserById);
       // Combine findUserByUsername and findUserByCredentials
        // both have same path
       app.get("/api/user", findUser);
       // Update User
       app.put("/api/user",updateUser);

        //request and response for function createUser
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