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
// ---     npm i moment  (date formatting)
// ---     npm i express-handlebars (npm i express-handlebars@6.0.7)
// ---                               https://www.npmjs.com/package/express-handlebars/v/6.0.7   
// --- Run: node index 
// ---      npm run dev
// -----------------------------------------------------------------
const express = require('express');
const path = require('path');
//const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');
///const members = require('./members.js');

const app = express();

// --- Init middleware
app.use(logger);

// --- Handlebar middleware (from stackOverflow)
// --- https://stackoverflow.com/questions/30527323/nodejs-with-express-and-handlebars-handlebars-engine-is-undefined
var expHbs = require('express-handlebars');
var handlebars = expHbs.create({
    defaultLayout: 'main',
    extname: '.handlebars'
    //helpers: handlebarsHelpers
});
// --- stackoverflow app.engine('.hbs', handlebars.engine);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


// --- Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// --- Set static folder (SHOWS OLDER PAGE)
// app.use(express.static(path.join(__dirname, 'public')));

// --- Homepage Route
// app.get('/', (req, res) => res.render('index'));
app.get('/', (req, res) => res.render('index', {
    title: '*** Member App ***',
    members
}));


// --- Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// --- Members API  Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




