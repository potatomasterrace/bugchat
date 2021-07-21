import React, { useEffect } from 'react';
import './CommunicationZone.css';
import InputZone from './InputZone';
import ChatZone from './ChatZone';
import ContactWindow from './ContactWindow';
import { useSelector, useDispatch } from 'react-redux'


const CommunicationZone = ({ currentDuckIndex }) => {
    const dispatch = useDispatch();
    const [loading, content, currentConversationIdx, intervalCounter] = useSelector(({ conversation: { loading, content, currentConversationIdx, intervalCounter } }) => [loading, content, currentConversationIdx, intervalCounter]);

    useEffect(() => {
        if (currentDuckIndex !== -1 && currentDuckIndex !== currentConversationIdx) {
            dispatch({
                type: 'conversation/updateConversationIdx',
                payload: { currentConversationIdx: currentDuckIndex },
            })
        }
    }, [currentDuckIndex, currentConversationIdx])
    useEffect(() => {
        // if evertyhing is loaded except conversation load convesation
        if (currentDuckIndex !== -1 && currentDuckIndex == currentConversationIdx) {
            fetch(`http://localhost:4242/conversation/${currentDuckIndex}`)
                .then(res => res.json())
                .then(resp =>
                    dispatch({
                        type: 'conversation/finishLoading',
                        payload: { resp },

                    }))
        }
    }, [loading, currentConversationIdx, intervalCounter]);
    if (currentConversationIdx == currentDuckIndex && currentConversationIdx !== -1) {
        return (
            <div className="chatHost innerShadow">
                <ContactWindow />
                <ChatZone history={content} />
                <InputZone handleSubmit={(message) => {
                    fetch(`http://localhost:4242/conversation/${currentDuckIndex}`, {
                        method: 'POST', body: JSON.stringify({ message }), headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                }} />
            </div>
        )
    }
    return <></>
}

export default CommunicationZone;