// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

// const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');


// Step 2
// Connect Database
// connectDB();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

var corsOptions = {
    'origin': '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api/users', users);
app.use('/api/posts', posts);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

