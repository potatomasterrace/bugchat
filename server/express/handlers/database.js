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
const db = {
    friends,
    conversations,
    send_message: (conversationIndex, message) => {
        conversations[conversationIndex].push({ message, sent: true })
    },
    receive_message: (conversationIndex, message) => {
        conversations[conversationIndex].push({ message, sent: false })
    }
};

module.exports = db;
