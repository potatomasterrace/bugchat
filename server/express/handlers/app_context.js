const db = require('./utils/database');
const longPoll = require('./utils/long_poll');

module.exports = longPoll(30,(minimumVersion, req, res)=> res.json(db.presentAppState()));
