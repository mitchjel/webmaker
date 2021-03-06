var mongoose = require ("mongoose");
var PageSchema = mongoose.Schema(
    {
            websiteId: {type: mongoose.Schema.Types.ObjectId, ref: "PageModel"},
            name: String,
            title: String,
            dateCreated: {type: Date, default: Date.now}
    },
            {collection: "page"}
);
module.exports = PageSchema;
