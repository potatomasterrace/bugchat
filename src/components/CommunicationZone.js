import React, { useEffect } from 'react';
import './CommunicationZone.css';
import InputZone from './InputZone';
import ChatZone from './ChatZone';
import ContactWindow from './ContactWindow';
import { useSelector, useDispatch } from 'react-redux'


const CommunicationZone = ({ currentDuckIndex }) => {
    const dispatch = useDispatch();
    const [loading, conversations, dbVersion] = useSelector(({ conversation: { loading, conversations, dbVersion } }) => [loading, conversations, dbVersion]);
    useEffect(() => {
        // if evertyhing is loaded except conversation load convesation

            fetch(`http://localhost:4242/conversation/${dbVersion}`)
                .then(res => res.json())
                .then(resp =>
                    dispatch({
                        type: 'conversation/finishLoading',
                        payload: { resp },

                    })).catch(e => dispatch({
                        type: 'conversation/finishLoading',
                        payload: { resp: { dbVersion: 1 } },
                    }))

    }, [loading,dbVersion]);
    
    if (currentDuckIndex !== -1 && conversations[currentDuckIndex]) {
        return (
            <div className="chatHost innerShadow">
                <ContactWindow />
                <ChatZone history={conversations[currentDuckIndex]} />
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