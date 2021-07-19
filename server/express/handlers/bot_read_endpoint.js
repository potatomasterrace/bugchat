const db= require( './database');
const bots = require('./bots')

module.exports =function (req, res) {
    const idx = parseInt(req.params['idx']);
    if(idx >=0 && idx<bots.length){
        return res.json(db.conversations[idx]);
    }
    return res.json({error:`wrong idx ${idx}`})
};
  