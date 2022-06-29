//import express, and any__routes files used in API folder
const router = require('express').Router();
const commentRoutes = require("./comment-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");

//app.use....
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);
router.user("/users", userRoutes);


//export router
module.exports = router;