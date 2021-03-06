const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const schedule = require('node-schedule');

const Turn = require('./models/turn');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Databse error ' + err);
});

const app = express();

const users = require('./routes/users');
const buses = require('./routes/buses');
const turns = require('./routes/turns');
const routes = require('./routes/routes');
const bookings = require('./routes/bookings');
const email = require('./routes/email');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/buses', buses);
app.use('/turns', turns);
app.use('/routes', routes);
app.use('/bookings', bookings);
app.use('/email', email);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

// Update database
var j = schedule.scheduleJob('*/60 * * * * *', function(){
  Turn.updateDatabase(() => {
    console.log('done');
  });
});
