import React from 'react';
import { confirmAlert } from 'react-confirm-alert';


import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';


function submit() {
  confirmAlert({
    title: 'Confirm to leave!',
        buttons: [
      {
        label: 'Yes',
        onClick: () => window.location.href='/'
      },
      {
        label: 'No',
        onClick: () => null
      }
    ]
  });
}


const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <button onClick={submit} className="leavebtn">Leave!</button>
    </div>
  </div>
);

export default InfoBar;