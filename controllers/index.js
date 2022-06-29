//import express.router()
const router = require("express").Router();

//define apiRoutes - any others?
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes");

//router.use "/", "/api"
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

//export router
module.exports = router;