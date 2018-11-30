var mongoose = require ("mongoose");

var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    // in case no first and last name provided a default will be created
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type: String, default: ""},
    dateCreated: {type: Date, default: Date.now}
},
    {collection: "user"}
);

module.exports = UserSchema;
// do the same for website page and widget