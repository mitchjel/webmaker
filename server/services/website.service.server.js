module.exports = function (app) {
    var websiteModel = require("../models/website/website.model.server");
    // create website
    app.post("/api/website", createWebsite);
        // find All Websites For User
        app.get("/api/user/:uid/website",findAllWebsitesForUser);
        // find website using ID
        app.get("/api/website/:wid",findWebsiteById);
    // update website
    app.put("/api/website",updateWebsite);
    // delete website
    app.delete("/api/website/:wid",deleteWebsite);
   async function createWebsite(req, res){
        // getting this item from the json body
        let website = req.body;
        const data = await websiteModel.createWebsiteForUser(website);
        res.json(data);
    }
     async function findAllWebsitesForUser(req, res){
    var uid = req.params["uid"];
    const data = await websiteModel.findAllWebsitesForUser(uid);
        res.json(data);
      }     
    
    
    async function findWebsiteById(req, res){
        const wid =req.params["wid"];
        const data = await websiteModel.findWebsiteById(wid);
        res.json(data);
    }

   async function updateWebsite(req, res){
       const website = req.body;
       const wid = website._id;
 const data = await websiteModel.updateWebsite(wid, website);
    res.json(data);
   }
   async function deleteWebsite (req, res){
        //ading a placeholder inside url 
        const websiteId = req.params["wid"];
       const data = await websiteModel.deleteWebsite(websiteId);
        res.json(data);
    }
};
