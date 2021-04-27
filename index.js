const express = require('express');

// connection to BD
const db = require('./config/db');

// Load routing
const operationsRoutes = require('./routes/operation');
const usersRoutes = require('./routes/user');

// import model
require('./models/Operations');
require('./models/Users');

db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch( err => console.log(err));


const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewars
app.use(express.json());


// Router Basic
app.use('/api', operationsRoutes);
app.use('/api', usersRoutes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});