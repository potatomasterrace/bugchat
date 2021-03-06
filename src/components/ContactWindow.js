import React from 'react';
import { useSelector } from 'react-redux';
import './ContactWindow.css';


function ContactWindow() {
  const currentFriend = useSelector(({app:{friends,currentDuckIndex,loading}}) =>{
    if (loading){
      return null
    }
    return friends[currentDuckIndex]
  })

  console.log(currentFriend)
  if (!currentFriend){
    return <></> 
  }
  return (
    <div className="headerWrapper">
      <img style={{height:'100px'}} alt-text='' src={currentFriend.image}/>

    <span className="contactName">
    {currentFriend.name} {currentFriend.is_typing ? ' is typing' : ''}
    </span>
    </div>
  );
}

export default ContactWindow;
