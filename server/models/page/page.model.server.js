const mongoose = require ("mongoose");
// import the page schema created
const PageSchema = require ("./page.schema.server");
// create a model for the PageSchema
const PageModel = mongoose.model("PageModel", PageSchema);
// Declare of all functions
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

// Implement all functions
function createPage (page) {
    return UserModel.createPage(page);
}

function findAllPagesForWebsite (wid) {
    return PageModel.findAllPagesForWebsite({websiteId: wid});
}
function findPageById (pid){
    return PageModel.findPageById(pid);
}
function updatePage(pid, page){
    return PageModel.updatePage({_id: pid}, page);
}
function deletePage (pid){
    return PageModel.deleteOne({_id: pid});
}

module.exports = PageModel;
