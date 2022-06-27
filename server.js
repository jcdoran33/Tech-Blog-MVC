//layout imports/requirements
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


//define const routes >controllers folder|| sequelize > config/connection||helpers? utils/helpers


//define app as express();
const app = express();
//define PORT as process.envPORT || 3001
const PORT = process.env.PORT || 3001;

//define sess (session) as an object with secret:, cookie:, store: etc

//app.use(session(sess));

