const db= require( './utils/database');
const longPoll = require('./utils/long_poll');

module.exports = longPoll(30,(minimumVersion, req, res)=>{ 
    const idx = parseInt(req.params['idx']);
    res.json(db.getConversation(idx))
});
