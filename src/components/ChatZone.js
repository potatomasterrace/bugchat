import React from 'react';
import Snippet from './Snippet';
import './ChatZone.css';

export default function ChatZone(props) {

  const {history} = props;  

  return (
        <div className="innerShadow">
        <div className="chatWrap">
        {
            history.map((item, index) => 
        
        <Snippet key={index} index={index} item={item} />
            )}
        </div>
        </div>
  );
}