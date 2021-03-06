import React from 'react';
import Snippet from './Snippet';
import './ChatZone.css';

export default function ChatZone(props) {

  const { history } = props;

  return (
    <div className="innerShadow">
      <div className="chatWrap">
        {
          history.map(({ message, sent }, index) =>
            <Snippet
              key={index}
              index={index}
              item={message}
              isSent={!sent} />
          )}
        {
          props.isTyping ?
          <Snippet
          item={`...`}
          isSent={true} 
          lighten={true}
          /> : 
          ''
        }
      </div>
    </div>
  );
}