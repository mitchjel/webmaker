// Import mongoose library
const mongoose = require ("mongoose");
// Import website schema
const WebsiteSchema = require("./website.schema.server")
// Model creation
const WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

// Creation CRUD fucntions
function createWebsiteForUser(website){
    return WebsiteModel.create(website);
}
function findAllWebsitesForUser(uid){
    return WebsiteModel.find({developerId: uid});
}
 function findWebsiteById(wid){
     return WebsiteModel.findById(wid);
    }
    function updateWebsite(wid, website) {
        return WebsiteModel.updateOne({_id: wid}, website);
    }
    function deleteWebsite(wid) {
        return WebsiteModel.deleteOne({_id:wid});
    }
module.exports = WebsiteModel;