const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    age:{type:Number},
    country:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:mongoose.Schema.ObjectId,ref:"Role"}
})
const articlesSchema = new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    author:{type:mongoose.Schema.ObjectId,ref:"User"}
});
const commentsSchema = new mongoose.Schema({
    comment: {type:String},
    commenter: {type:String}
});
const roleSchema = new mongoose.Schema({
    role: { type: String, required: true, unique: true },
    permissions: [{ type: String, required: true, unique: true },{type: String}],
  });
const User = mongoose.model("User", userSchema);
const Articles = mongoose.model("Articles", articlesSchema);
const Comments = mongoose.model("Comments", commentsSchema);
const Role = mongoose.model("Role", roleSchema);
module.exports.User = User;
module.exports.Articles = Articles;
module.exports.Comments = Comments;
module.exports.Role = Role;
