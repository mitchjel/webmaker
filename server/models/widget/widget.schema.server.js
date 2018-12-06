const mongoose = require ("mongoose");
const WidgetSchema = mongoose.Schema({
        pageId: {type: String, default: ""},   

        widgetType: {type: String} ,
        name: String,
        text: String, 
        url: String, 
        width: String, 
        size: "number",
        dateCreated: {type: Date, default: Date.now }
},

            {collection: "widget"}
);

module.exports = WidgetSchema;
