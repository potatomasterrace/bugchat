import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import CommunicationZone from './CommunicationZone';

function App() {
  const conversations = useSelector((state) => state.app.conversations)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="conversationListContainer">
        {conversations.map(
          (v, index) => (
            <div>
              <button onClick={() =>{
                console.log(`switched to conversation`,index)
                dispatch({
                type: 'app/switchToConversation',
                payload: {
                  index
                }
              })}}
              >
                {v}
              </button>
            </div>
          )
        )}
      </div>
      <div className="mainContainer">
        <CommunicationZone />
      </div>
    </div>
  );
}

export default App;
