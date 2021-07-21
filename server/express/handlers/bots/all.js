const rubberduck = require('./rubberduck')
const echo = require('./echo')
const delayed_echo = require('./delayed_echo')
const doubble_echo = require('./double_echo')

// create the bot instances respectful of their indexes
const bots = [rubberduck, echo, delayed_echo,doubble_echo].map((v, i) => v(i));
module.exports = bots;
