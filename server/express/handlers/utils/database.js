let friends = [
    {
        name: 'Dr. Rubberduck',
        image: '/ducky.jpg',
        is_typing: false,
    },
    {
        name: 'Donald Duck',
        image: '/og_duck.png',
        is_typing: false,
    },
]


let conversations = [
    [
        {
            'sent': false,
            'message': "something about something."
        }
    ],
    [
        {
            'sent': false,
            'message': "donalDuck in da House, I echo stuff."
        }
    ]
]

function getLastMessage(index) {
    const messages = conversations[index];
    return '' ? !messages.length : messages[messages.length - 1];
}


// dbVersion is a value incremented to signal that a change has been made 
let dbVersion = 2;

// wrapper to increment dbVersion after change
const dbIncrementWrapper = (func) => (...args) => {
    func(...args);
    dbVersion++;
}

const db = {
    getFriends: () => friends,
    getConversation: (idx) => ({
        content: conversations[idx],
        dbVersion: dbVersion,
    }),
    getVersion: () => (dbVersion),
    presentAppState: () => ({
        friends: friends.map((v, i) => {
            v.last_message = getLastMessage(i);
            return v;
        }), dbVersion
    }),
    sendMessage: dbIncrementWrapper((conversationIndex, message) => {
        conversations[conversationIndex].push({ message, sent: true })
    }),
    receiveMessage: dbIncrementWrapper((conversationIndex, message) => {
        conversations[conversationIndex].push({ message, sent: false })
    }),
    setTyping: dbIncrementWrapper((friendIndex, value) => {
        friends[friendIndex].is_typing = value;
    }),
};

module.exports = db;
