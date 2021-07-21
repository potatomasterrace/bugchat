import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import CommunicationZone from './components/CommunicationZone';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

function App() {
  const loading = useSelector((state) => state.app.loading)
  const friends = useSelector((state) => state.app.friends)
  const dbVersion = useSelector((state) => state.app.dbVersion)
  const currentDuckIndex = useSelector((state) => state.app.currentDuckIndex)
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`/api/app_context/${dbVersion}`)
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
  const getSizes = (size) => (['xs', 'sm', 'md', 'lg', 'xl'].reduce((acc, v) => {
    acc[v] = size;
    return acc;
  }, {}))
  // PIMP THIS PART
  return (
    <div className="App">
      <Grid
        className="grid"
        container
        spacing={0}

        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item {...getSizes(1)}>
            {friends.map(
              (v, index) => (
                <Card key={`duck_${index}`} className="contactCard" onClick={() => {
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
                </Card>
              )
            )}
        </Grid>
        <Grid item {...getSizes(11)}>
          <div className="mainContainer">
            <CommunicationZone duckName={friends[currentDuckIndex].name} currentDuckIndex={currentDuckIndex} isTyping={friends[currentDuckIndex].is_typing} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
