import React from 'react';
import './App.css';
import { useSelector, useDispatch,useEffect } from 'react-redux'
import CommunicationZone from './components/CommunicationZone';

function App() {
  const loading = useSelector((state) => state.app.loading)
  const friends = useSelector((state) => state.app.friends)
  const dispatch = useDispatch();
  setTimeout(fetch("http://localhost:4242/app_context")
      .then(res => res.json())
      .then(resp=>dispatch({
        type: 'app/finishLoading',
        payload: {
          resp
        }
      }))
      .catch(e=>alert(String(e))),'100'
  )
  if(loading){
    return '';
  }
  return (
    <div className="App">
      <div className="conversationListContainer">
        {friends.map(
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
                {v.name}
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
