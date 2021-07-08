const db = require('./database');

module.exports = function (req, res) {
    return res.json({ friends: db.friends, conversations: db.conversations });
};
