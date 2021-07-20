const db = require('./database');

const getRubberDuckResponse = (history) => {
    const answersBasic = ["can you elaborate?", "and why do you believe that is so?", "can you be more specific?", "what would be your guess?", "I need more details for this one"];
    const answersAdvanced = ["have you check the logs?", "have you tried restarting?", "what does the documentation say?", "Maybe its a typo"]
    const answersAdjust = ["you need to be a bit more specific", "come on I am trying to help", "whatever", "that does not sound like a bug"]
    const lastSentMessage = history[0];
    const pickFromList = (list) => list[Math.floor(Math.random() * list.length)]
    if (history.length >= 4) {
        return 'advanced';pickFromList(answersAdvanced);
    } else if (lastSentMessage.length <= 7) {
        return 'adjust';pickFromList(answersAdjust);
    } else if (history.length <= 3) {
        return 'basic';pickFromList(answersBasic);
    }
    return `Weird right ? the length some developpers would go to to obscure bugs of length 6 to the guy doing the assignement then not even have the decency to check the code. (ERROR_MSG=420)`;
}

const rubberduck = {
    dialogueEngine: (message) => {
        db.send_message(0, message)
        const resp = getRubberDuckResponse(db.conversations[0]);
        if (resp) {
            setTimeout(() => db.receive_message(0, resp), 6000)
        }
    }
}

const donald = {
    dialogueEngine: (message) => {
        db.send_message(1, message)
        db.receive_message(1, message)
    }
}
const bots = [rubberduck, donald]

module.exports = bots;