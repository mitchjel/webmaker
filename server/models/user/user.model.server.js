const mongoose = require ("mongoose");
// import the schema created
const UserSchema = require("./user.schema.server");
// create a model for the userSchema
const UserModel = mongoose.model("UserModel", UserSchema);

// declare all fucntions
UserModel.model.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCreadentials = findUserByCreadentials;
UserModel.updateUser = updateUser;

// implement functions
function createUser (user) {
    return UserModel.create(user);
}

function findUserById (uid) {
    return UserModel.findById(uid);
}

function findUserByUsername(username) {
    // findOne to look for one single item matches the given item
    return UserModel.findOne({username: username});

}

function findUserByCreadentials(username, password){
    return UserModel.findOne({username: username, password: password});
}

function updateUser(uid, user){
    return UserModel.update({_id:uid}, user);
}