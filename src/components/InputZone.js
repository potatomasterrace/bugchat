import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import './InputZone.css';

export default function InputZone(props) {
  const [value, setValue] = useState('');

  const submit = () => {
    props.handleSubmit(value)
    setValue('')
  }
  return (
    <Paper className="root">
      <InputBase
        className="input"
        placeholder="Enter Message..."
        inputProps={{ 'aria-label': 'Enter...' }}
        value={value}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            submit()
          }
        }}
        onChange={(event) => setValue(event.target.value)}
      />
      <IconButton className="iconButton" aria-label="Search">
        <SendIcon onClick={submit} />
      </IconButton>
    </Paper>
  );
};
