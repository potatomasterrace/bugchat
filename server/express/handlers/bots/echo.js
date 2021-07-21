const db = require('../utils/database');

const echo = (index) => ({
    dialogueEngine: (message) => {
        db.sendMessage(index, message)
        db.receiveMessage(index, message)
    }
})


module.exports = echo;