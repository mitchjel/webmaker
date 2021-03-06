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
function createPage(page) {
    return PageModel.create(page);
}

function findAllPagesForWebsite (wid) {
    return PageModel.find({websiteId: wid});
} // call mongoose function instead itself to clarify it
function findPageById (pid){
    return PageModel.findById(pid);
}
function updatePage(pid, page){
    return PageModel.updateOne({_id: pid}, page);
}
function deletePage (pid){
    return PageModel.deleteOne({_id: pid});
}

module.exports = PageModel;
