module.exports = function(app) {
    var pageModel = require("../models/page/page.model.server");

    app.post("/api/page", createPage);
// Find pages for website
app.get ("/api/website/:wid/page",findAllPagesForWebsite);
// Finding page by Id
 app.get("/api/page/:pid", findPageById);
 // Update page
 app.put("/api/page",updatePage);
 // Deleting page
 app.delete("/api/page/:pid",deletePage);

//  pages = 
//   [
//     { _id: "321", 
//     name: "Post 1",
//      websiteId: "456",
//       title: "Lorem"
//      },
  
//     { _id: "432",
//      name: "Post 2",
//       websiteId: "456",
//       title: "Lorem"
//      },
  
//     { _id: "543", 
//     name: "Post 3",
//      websiteId: "456",
//      title: "Lorem" 
//     }
//   ];

// CRUD functions for User
  async function createPage(req, res){
    // getting this item from the json body
    let page = req.body;
    const data = await pageModel.createPage(page);
    res.json(page);
}

 async function findAllPagesForWebsite(req, res){
    // get the userId from the request
    const wid = req.params["wid"];    
const data = await pageModel.findAllPagesForWebsite(pageId);
  res.json(data);
}

//   create function selectWebsiteById to call when
//   finding update and delete pages
// function selectPageById (pid){
//     for ( let x = 0; x < pages.length; x++){
//         if( pages[x]._id === pid){
//              return pages[x];
//            }
//         }
//     }

    async function findPageById(req, res){
        const pid =req.params["pid"];
        const data = await pageModel.findPageById(pid);
        res.json(data);
    }

    async function updatePage(req, res){
        const page = req.body;
        const pid = page._id;
        const data = await pageModel.updatePage(pid, page);
     res.json(data);
    }
     async function deletePage (req, res){
        const pageId = req.params["pid"];
        const data = await pageModel.deleteOne(pageId);
        res.json(data);
    }
};

