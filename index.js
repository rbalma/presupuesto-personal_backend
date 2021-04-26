const express = require('express');

// connection to BD
const db = require('./config/db');

// import model
require('./models/Operations');

db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch( err => console.log(err));


const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewars
app.use(express.json());

// Routes
app.use(require('./routes/operation'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});