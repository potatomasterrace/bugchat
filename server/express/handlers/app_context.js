import {default as db} from './database';

module.exports = function (req, res) {
   return  { friends:db.friends, conversations:db.conversations };
};
