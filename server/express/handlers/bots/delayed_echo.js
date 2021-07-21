const db = require('../utils/database');

const delayedEcho = (index) => ({
    dialogueEngine: (message) => {
        db.sendMessage(index, message)
        db.setTyping(index,true)

        setTimeout(() => {
            db.receiveMessage(index, message)
            db.setTyping(index,false)
        }, 5000)
    }
})


module.exports = delayedEcho;