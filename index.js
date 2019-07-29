/**
 * Backend - app thiagovilarinholemes.com.br
 * @author: Thiago Vilarinho Lemes
 * @version: 1.0
 * @Date: 2019-07-28
 */

/**
 * Imports library, set port listen
 */
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const userRoute = require('./app/controllers/userController');


app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/**
 * Routes
 */
userRoute(app);


/**
 * Port listen
 */
app.listen(port, () => {console.log('Listem port 3001... {^_^}')});