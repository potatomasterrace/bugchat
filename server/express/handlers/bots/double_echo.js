const db = require('../utils/database');

const doubleEcho = (index) => ({
    dialogueEngine: (message) => {
        db.sendMessage(index, message)
        db.setTyping(index, true)
        db.receiveMessage(index, message)
        setTimeout(() => {
            setTimeout(() => {
                db.setTyping(index, false)
                db.setTyping(index, true)
                db.receiveMessage(index,'second message: '+ message)
                db.setTyping(index, false), 2000
            },2000)
        }, 2000)
    }
})


module.exports = doubleEcho;