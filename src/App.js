import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import CommunicationZone from './components/CommunicationZone';

function App() {
  const loading = useSelector((state) => state.app.loading)
  const friends = useSelector((state) => state.app.friends)
  const intervalCounter = useSelector((state) => state.app.intervalCounter)
  const currentDuckIndex = useSelector((state) => state.app.currentDuckIndex)
  const dispatch = useDispatch();
  useEffect(() =>{
    fetch("http://localhost:4242/app_context")
    .then(res => res.json())
    .then(resp => {
      dispatch({
        type: 'app/finishLoading',
        payload: { resp },

      })
    }, [])
    
  } , [intervalCounter])

  if (loading) {
    return '';
  }
  return (
    <div className="App">
      <div className="conversationListContainer">
        {friends.map(
          (v, index) => (
            <div>
              <button onClick={() => {
                console.log(`switched to conversation`, index)
                dispatch({
                  type: 'app/switchToConversation',
                  payload: {
                    index
                  }
                })
              }}
              >
                {v.name}
              </button>
            </div>
          )
        )}
      </div>
      <div className="mainContainer">
        <CommunicationZone currentDuckIndex={currentDuckIndex}/>
      </div>
    </div>
  );
}

export default App;
