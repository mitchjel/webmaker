module.exports = function(app) {
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
       

users= [
    {_id: "123", 
    username: "alice",
     password: "alice", 
     firstName: "Alice", 
     lastName: "Wonder",
      email: "alice@gmail.com"
    },
    {_id: "234",
     username: "bob",
      password: "bob", 
      firstName: "Bob",
       lastName: "Marley",
        email: "bob@whatever.com"
    },
    {_id: "345", 
    username: "charly",
     password: "charly",
    firstName: "Charly", 
    lastName: "Garcia",
     email: "charly@hotmail.com"
    },
    {_id: "456", 
    username: "shiyu", 
    password: "shiyu", 
    firstName: "Shiyu", 
    lastName: "Wang",
    email: "swang@ulem.org"
    }
    ];
        //request and response for function createUser
    function createUser(req, res){
        // Syncing user request to the body and ser
            var user = req.body;
              user._id = Math.random().toString();
                users.push(user);
                // sending response (user object) on json format to the client
                res.json(user);
    
    }
        function findUserById(req, res){
            //getting the userId from req paramater
            const userId = req.params["uid"];
            let user = selectUserById(userId);    
          // they always a res even if such user does not exist
              res.json(user);
        }
        // create findUser function
        function findUser(req, res){
        
        // use query to get parameters from the request 
            const username = req.query['username'];
            const password = req.query['password'];
            if (username && password){
                let user;
                for (let i = 0; i < users.length; i++) {
                        if (users[i].username === username &&
                            users[i].password === password
                            ) {
                               user = users[i];
                              }
                    }
                    res.json(user);
                    // use return to stop the function
                    return;
                } 
                // find user by username
                if(username){
                    let user;
                    for ( let j = 0; j < users.length; j++){
                        if ( users[j].username === username){
                             user =   users[j];
                        }
                    }
                    res.json(user);
                    return;
                }
            }
// create selectUserById function
function selectUserById (uid){
 for (let x = 0; x < users.length; x++) {
     if (users[x]._id === uid) {
           return users[x]; 
       }
   }
}
        // create function updateUser
        function updateUser(req, res){
            const user = req.body;
            const oldUser = selectUserById(user._id);
            const index =users.indexOf(oldUser);
            users[index] = user;
            res.json(user);
         }
    };