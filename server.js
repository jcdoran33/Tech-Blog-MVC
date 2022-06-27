//layout imports/requirements
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


//define const routes >controllers folder|| sequelize > config/connection||helpers? utils/helpers
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

//define app as express();
const app = express();
//define PORT as process.envPORT || 3001
const PORT = process.env.PORT || 3001;

//define sess (session) as an object with secret:, cookie:, store: etc
const sess = {
    secret: "secret"
};

//app.use(session(sess));
app.use(session(sess));

const hbs = exphbs.create({ helpers });


//sequelize sync and app.listen
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App now listening on ${PORT}!`));
  });