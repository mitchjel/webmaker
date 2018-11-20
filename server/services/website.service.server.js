module.exports = function (app) {
    // create website
    app.post("/api/website",createWebiste);
        // find All Websites For User
        app.get("/api/user/:uid/website",findAllWebsitesForUser);
        // find website using ID
        app.get("/api/website/:wid",findWebsiteById);
    // update website
    app.put("/api/website/:wid",updateWebsite);
    // delete website
    app.delete("/api/website/:wid",deleteWebsite);

    websites = [

        { _id: "123",
         name: "Facebook",
          developerId: "456",
           description: "Lorem" },
        { _id: "234", 
        name: "Tweeter",
          developerId: "456",
           description: "Lorem"
         },
      
        { _id: "456",
         name: "Gizmodo", 
           developerId: "456",
            description: "Lorem"
         },
    
        { _id: "890",
         name: "Go",
        developerId: "123",
        description: "Lorem" },
      
        { _id: "567",
         name: "Tic Tac Toe",
        developerId: "123",
        description: "Lorem"
         },
      
        { _id: "678", 
        name: "Checkers",
        developerId: "123",
        description: "Lorem"
         },
      
        { _id: "789",
         name: "Chess",
         developerId: "234",
        description: "Lorem"
         }
      ];

    function createWebiste(req, res){
        // getting this item from the json body
        let website = req.body;
        website._id = Math.random().toString();
        websites.push(website);
        res.json(website);
    }
    function findAllWebsitesForUser(req, res){
        let result = [];
        // get the userId from the request
        const userId = req.params["uid"];
        
      for ( let i = 0; i < websites.length; i++){
             if (websites[i].developerId === userId){
                 result.push(websites[i]);
             }
      }
      // send user array to the client
      res.json(result);
    }
    function selectWebsiteById (wid){
        for ( let x = 0; x < websites.length; x++){
            if( websites[x]._id === wid){
                 return websites[x];
            }
       }
    }
    function findWebsiteById(req, res){
        const wid =req.params["wid"];
        const website = selectWebsiteById(wid);
        res.json(website);
    }
   function updateWebsite(req, res){
       const website = req.body;
    const oldWeb = selectWebsiteById(website._id);
    const index = websites.indexOf(oldWeb);
    websites[index] = website;
    res.json(website);
   }
    function deleteWebsite (req, res){
        //aading a placeholder inside url 
        const websiteId = req.params["wid"];
        const website = selectWebsiteById(websiteId);
        const index = websites.indexOf(website);
        websites.splice(index,1);
        res.json(websites);
    }
};

