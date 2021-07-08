import {default as db} from './database';

module.exports = function (req, res) {
    res.json(db.friends);
};
