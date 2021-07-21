const db = require('./utils/database');

const getRubberDuckResponse = (history) => {
    const answersBasic = ["can you elaborate?", "and why do you believe that is so?", "can you be more specific?", "what would be your guess?", "I need more details for this one"];
    const answersAdvanced = ["have you check the logs?", "have you tried restarting?", "what does the documentation say?", "Maybe its a typo"]
    const answersAdjust = ["you need to be a bit more specific", "come on I am trying to help", "whatever", "that does not sound like a bug"]
    const lastSentMessage = history[0];
    const pickFromList = (list) => list[Math.floor(Math.random() * list.length)]
    if (history.length >= 4) {
        return pickFromList(answersAdvanced);
    } else if (lastSentMessage.length <= 7) {
        return pickFromList(answersAdjust);
    } else if (history.length <= 3) {
        return pickFromList(answersBasic);
    }
    return `Weird right ? the length some developpers would go to to obscure bugs of length 6 to the guy doing the assignement then not even have the decency to check the code. (ERROR_CODE=420)`;
}

const rubberduck = (index) => ({
    dialogueEngine: (message) => {
        db.sendMessage(index, message)
        const resp = getRubberDuckResponse(db.conversations[index]);
        if (resp) {
            setTimeout(() => db.receiveMessage(index, resp), 1000)
        }
    }
})

const donald = (index) => ({
    dialogueEngine: (message) => {
        db.sendMessage(index, message)
        db.receiveMessage(index, message)
    }
})

// create the bot instances respectful of their indexes
const bots = [rubberduck, donald].map((v,i)=>v(i));

module.exports = bots;