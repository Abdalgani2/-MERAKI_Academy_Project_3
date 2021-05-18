const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    age:{type:Number},
    country:{type:String},
    email:{type:String},
    password:{type:String}
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
const User = mongoose.model("User", userSchema);
const Articles = mongoose.model("Articles", articlesSchema);
const Comments = mongoose.model("Comments", commentsSchema);
module.exports.User = User;
module.exports.Articles = Articles;
module.exports.Comments = Comments;
