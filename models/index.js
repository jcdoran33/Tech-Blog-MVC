//first, import other models
const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

//define realtionships - has Many, belongs to, etc
//A user can have many posts
User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
//A user can have many Comments
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
//A post can have many comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
})


//A comment belongs to s ainsgle post only
Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

//A post belongs to a single user only
Post.belongsTo(User, {
    foreignKey: "user_id"
});


//export the models
module.exports = { Comment, Post, User };