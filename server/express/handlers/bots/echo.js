const db = require('../utils/database');

const echo = (index) => ({
    dialogueEngine: (message) => {
        db.sendMessage(index, message)
        db.setTyping(index,true)
        db.receiveMessage(index, message)
        db.setTyping(index,false)
    }
})


module.exports = echo;