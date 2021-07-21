import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import CommunicationZone from './components/CommunicationZone';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  const loading = useSelector((state) => state.app.loading)
  const friends = useSelector((state) => state.app.friends)
  const dbVersion = useSelector((state) => state.app.dbVersion)
  const currentDuckIndex = useSelector((state) => state.app.currentDuckIndex)
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`http://localhost:4242/app_context/${dbVersion}`)
      .then(res => res.json())
      .then(resp => {
        dispatch({
          type: 'app/finishLoading',
          payload: { resp },

        })
      }, [])

  }, [dbVersion])

  if (loading) {
    return '';
  }
  const getSizes = (size)=>(['xs', 'sm','md','lg','xl'].reduce((acc,v)=>{
    acc[v] = size;
    return acc;
  },{}) )
  // PIMP THIS PART
  return (
    <div className="App">
      <Grid className="grid" container spacing={0}>
        <Grid item {...getSizes(1)}>
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
        </Grid>
        <Grid item {...getSizes(11)}>
          <div className="mainContainer">
            <CommunicationZone currentDuckIndex={currentDuckIndex} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
