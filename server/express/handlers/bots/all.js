const rubberduck = require('./rubberduck')
const echo = require('./echo')

// create the bot instances respectful of their indexes
const bots = [rubberduck, echo].map((v, i) => v(i));
module.exports = bots;
