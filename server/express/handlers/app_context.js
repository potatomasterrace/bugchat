const db = require('./database');
const {friends,conversations} =db;

module.exports = function (req, res) {
    return res.json({ friends, conversations });
};
