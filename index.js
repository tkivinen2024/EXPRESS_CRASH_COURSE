// -----------------------------------------------------------------
// --- Express crash course
// --- index.js - main file
// --- 
// --- 24.3.2024 Timo Kivinen
// -----------------------------------------------------------------
// --- Initialization:
// ---     npm install express --save
// ---     npm init -y
// ---     npm i -D nodemon
// --      npm i moment  (date formatting)
// --- Run: node index 
// ---      npm run dev
// -----------------------------------------------------------------
const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');
///const members = require('./members.js');
const app = express();

// Init middleware
app.use(logger);

//app.get('/', (req, res) => {
//    // res.send('<H1>Hello World !</H1>');
//    res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});
// Set static folder
// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));


// Members API  Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




