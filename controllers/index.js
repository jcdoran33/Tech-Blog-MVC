//import express.router()
const router = require("express").Router();

//define apiRoutes - any others?
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js")

//router.use "/", "/api"
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

//export router
module.exports = router;