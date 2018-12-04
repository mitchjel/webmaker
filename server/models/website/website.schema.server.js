const mongoose = require ("mongoose") ;
const WebsiteSchema = mongoose.Schema({
    name: String,
    // DeveloperId refers to id of user must be the predefine property Objectid
    // on the mongoose library 
    developerId: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    description: String,
    dateCreated: {type: Date, default: Date.now }
},
    {collection: "website"}
);
module.exports = WebsiteSchema