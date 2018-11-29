module.exports = function(app) {

    app.post("/api/page", createPage);
// Find pages for website
app.get ("/api/website/:wid/page",findAllPagesForWebsite);
// Finding page by Id
 app.get("/api/page/:pid", findPageById);
 // Update page
 app.put("/api/page",updatePage);
 // Deleting page
 app.delete("/api/page/:pid",deletePage);

 pages = 
  [
    { _id: "321", 
    name: "Post 1",
     websiteId: "456",
      title: "Lorem"
     },
  
    { _id: "432",
     name: "Post 2",
      websiteId: "456",
      title: "Lorem"
     },
  
    { _id: "543", 
    name: "Post 3",
     websiteId: "456",
     title: "Lorem" 
    }
  ];
//  Create all Functions
function createPage(req, res){
    // getting this item from the json body
    let page = req.body;
    page._id = Math.random().toString();
    pages.push(page);
    res.json(page);
}

function findAllPagesForWebsite(req, res){
    let result = [];
    // get the userId from the request
    const wid = req.params["wid"];
    
  for ( let i = 0; i < pages.length; i++){
         if (pages[i].websiteId === wid){
             result.push(pages[i]);
         }
  }
  // send user array to the client
  res.json(result);
}
  // create function selectWebsiteById to call when
  // finding update and delete pages
function selectPageById (pid){
    for ( let x = 0; x < pages.length; x++){
        if( pages[x]._id === pid){
             return pages[x];
           }
        }
    }

    function findPageById(req, res){
        const pid =req.params["pid"];
        const page =selectPageById (pid);
        res.json(page);
    }

    function updatePage(req, res){
        const page = req.body;
     const oldPage = selectPageById(page._id);
     const index = pages.indexOf(oldPage); // looking for where the page is located
    this.pages[index] = page;
     res.json(page);
    }
    function deletePage (req, res){
        //ading a placeholder inside url 
        const pageId = req.params["pid"];
        const page = selectPageById(pageId);
        const index = websites.indexOf(page);
        pages.splice(index,1);
        res.json(pages);
    }
};
