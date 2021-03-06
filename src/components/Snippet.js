import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Snippet.css';



export default function Snippet(props) {

  return (
    <div>
      <Paper className={`${props.lighten ? 'lighten' : ''} snippetBox`}
      style={props.isSent ? {float: 'left', backgroundColor: '#6accc3'}: {float : 'right'}}>
        <Typography component="p">
          {props.item}
        </Typography>
      </Paper>
    </div>
  );
}