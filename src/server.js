const express = require('express');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
const customersRoutes = require('./customers/customers.routes');
const db = require('./config/database');
// Init db
db();
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true});
const app = express();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// init routes
const router = express.Router();
// use express router
app.use('/api', router);
customersRoutes(router);

app.listen(properties.PORT, () => console.log(`Server is running on ${properties.PORT}`));