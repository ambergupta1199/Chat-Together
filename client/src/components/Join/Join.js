import React, { useState } from 'react';
import {Link} from "react-router-dom"

import './Join.css';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    
    <div className="joinOuterContainer">
    <title>Join</title>
      <div className="joinInnerContainer">
        <h1 className="heading">Join Chatting Room</h1>
        <div>
          <input placeholder="Room Name" className="joinInput" type="text" required onChange={(event) => setName(event.target.value)}  />
        </div>
        <div>
        
          <input placeholder="Room Password" className="joinInput mt-20" type="password" minLength="4" maxLength="8" required onChange={(event) => setRoom(event.target.value)}  />
                  </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        
          </Link>
      </div>
    </div>
  );
}
