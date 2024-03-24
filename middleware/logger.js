// -----------------------------------------------------------------
// --- Express crash course
// --- logger.js - Logger
// --- 
// --- 23.3.2024 Timo Kivinen
// -----------------------------------------------------------------
const moment = require('moment');

const logger = (req, res, next) => {
    //console.log('Hello');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}


module.exports = logger;
