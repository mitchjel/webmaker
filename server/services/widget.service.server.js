module.exports = function(app) {
// creation of all widget services
app.post("/api/widget",createWidget);
app.get("/api/page/:pid/widget", findAllWidgetsForPage);
app.get("/api/widget/:wgid", findWidgetById );
app.put("/api/widget", updateWidget );
app.delete("/api/widget/:wgid",deleteWidget);

widgets: Widget= [

    { _id: "123",
     widgetType: "HEADING",
      pageId: "321",
       size: 2,
        text: "GIZMODO"},
    { _id: "234",
     widgetType: "HEADING",
      pageId: "321",
       size: 4,
        text: "Lorem ipsum"
    },
  
    { _id: "345",
     widgetType: "IMAGE",
      pageId: "321",
       width: "100%",
        url: "http://lorempixel.com/400/200/"
    },
  
     { _id: "567",
      widgetType: "HEADING",
       pageId: "321",
        size: 4,
         text: "Lorem ipsum"
        },
  
    { _id: "678",
     widgetType: "YOUTUBE",
      pageId: "321",
       width: "100%",
        url: "https://youtu.be/AM2Ivdi9c4E"
     }
  ];
  function createWidget(req, res){
        // getting this item from the json body
    let  widget = req.body;
    widget._id = Math.random().toString();
    widget.push( widget);
    res.json( widget);
  }
  function findAllWidgetsForPage (req, res) {
    let result = [];
    // get the userId from the request
    const pid = req.params["pid"];
  for ( let i = 0; i < widgets.length; i++){
         if (widgets[i].pageId === pid){
             result.push(widgets[i]);
         }
  }
  // send user array to the client
  res.json(result);
  }

  function selectWidgetById (wgid){
    for ( let x = 0; x < widgets.length; x++){
        if( widgets[x]._id === wgid){
             return widgets[x];
           }
        }
  }
  function findWidgetById(req, res){
    const wgid =req.params["wgid"];
    const widget = selectWidgetById (wdgid);
    res.json(widget);
}

function updateWidget(req, res){
    const widget = req.body;
 const oldWidget = selectWidgetById(widget._id);
 const index = widgets.indexOf(oldWidget); // looking for where the page is located
this.widgets[index] = widget;
 res.json(widget);
}
function deleteWidget (req, res){
    //aading a placeholder inside url 
    const wgid = req.params["wgid"];
    const widget = selectWidgetById(wgid);
    const index = widgets.indexOf(widget);
    widgets.splice(index, 1);
    res.json(widgets);
}
};