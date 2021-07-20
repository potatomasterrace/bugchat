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

// dbVersion is a value incremented to signal that a change has been made 
const dbVersion = 1;
const db = {
    getFriends:()=>friends,
    getConversations:()=>conversations,
    getVersion: ()=> dbVersion,
    present:()=>{friends,conversations,version:dbVersion},
    sendMessage: (conversationIndex, message) => {
        dbVersion++;
        conversations[conversationIndex].push({ message, sent: true })
    },
    receiveMessage: (conversationIndex, message) => {
        dbVersion++;
        conversations[conversationIndex].push({ message, sent: false })
    }
};

module.exports = db;
