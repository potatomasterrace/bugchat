let friends = [
    {
        name: 'Dr. Rubberduck',
        image: '/ducky.jpg',
        is_typing: 0,
    },
    {
        name: 'Echo service',
        image: '/echo.jpg',
        is_typing: 0,
    },
    {
        name: 'Delayed echo service',
        image: '/ie.jpg',
        is_typing: 0,
    },
    {
        name: '2 echo service',
        image: '/shotgun.webp',
        is_typing: 0,
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
            'message': "I echo stuff immediately."
        }
    ],
    [
        {
            'sent': false,
            'message': "I echo stuff after 5 sec."
        }

    ],
    [
        {
            'sent': false,
            'message': "I will repeat ounce after 2 sec."
        },
        {
            'sent': false,
            'message': "Then repeat myself 2 sec later"
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
    getConversations: () => ({
        conversations,
        dbVersion,
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
        if (value) {
            friends[friendIndex].is_typing += 1
        } else {
            friends[friendIndex].is_typing -= 1
        }
    }),
};

module.exports = db;
