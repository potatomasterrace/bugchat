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


let conversations=[
    [
        {
            'sent': false,
            'message':"something about something."
        }
    ],
    [
        {
            'sent': false,
            'message':"donalDuck in da House !"
        }
    ]
]
const db = {
    friends,
    conversations,
    send_message: function (conversationIndex,message) {
            this.conversations[conversationIndex].append({message,sent:true})
    },
    receive_message: function(conversationIndex,message){
        this.conversations[conversationIndex].push({message,sent:false})
    }
};


export default db;
